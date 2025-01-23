"use client"
import { Editor as EditorComponent } from '@tinymce/tinymce-react';
import "@liveblocks/react-ui/styles.css";
import "@liveblocks/react-lexical/styles.css";
import { useEffect, useRef, useState } from 'react';
import {io} from "socket.io-client"
export default function Editor() {
  const [value, setValue] = useState('');
  const socketRef = useRef(io("http://localhost:5000"))
  const [socketId,setSocketId] = useState<string>("")
  useEffect(()=>{
    console.log(value);
  },[value])
  useEffect(()=>{
    const socket = socketRef.current;
    socket.on("connect",()=>{
      if(socket.active && socket.id){
        console.log("connected",socket.id);
        setSocketId(socket.id);
      }
    })
    socket.on("data",(data:{value:string})=>{
      setValue(data.value);
    })
    socket.emit("join-room",{discussionId:socketId});
  },[])
  useEffect(() => {
    const socket = socketRef.current;

    // On socket connection
    socket.on("connect", () => {
      console.log("connected");
    });

    // Receive data and set value
    socket.on("data", (data: { value: string }) => {
      setValue(data.value);
    });

    // Cleanup the socket on component unmount
    return () => {
      socket.off("connect");
      socket.off("data");
    };
  }, []);
  useEffect(() => {
    const socket = socketRef.current;

    // Emit typing event with debounce
    const typingTimeout = setTimeout(() => {
      socket.emit("typing", { data: value });
    }, 300); // Adjust the debounce time as necessary

    return () => {
      clearTimeout(typingTimeout); // Cleanup timeout on value change
    };
  }, [value]);
  return (
    <main className="min-h-screen w-screen flex flex-col justify-start items-center">
      <section className="w-[95%] h-screen flex flex-col justify-center items-center">
        <EditorComponent
          tinymceScriptSrc="/tinymce/tinymce.min.js"
          apiKey={process.env.NEXT_PUBLIC_TINY_MCE_PRIVATE_KEY}
          init={{
            skin: (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oxide-dark' : 'oxide'),
            content_css: (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default'),
            plugins: 'anchor autolink charmap codesample emoticons image link lists media paste searchreplace table visualblocks wordcount pagebreak visualblocks emoticons insertdatetime mentions markdown tinymcespellchecker',
            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat | pagebreak | visualblocks | emoticons | insertdatetime | mentions | markdown | tinymcespellchecker',
            spellchecker_language: 'en_US',
            pagebreak_split_block: true,
            paste_data_images: true, // Allow pasting images directly
            automatic_uploads: true, // Automatically upload dragged images
            file_picker_types: 'image',
            height: '100%',
            width: '100%', 
            // images_upload_url: '/api/upload-image', // Your server endpoint for image uploads
            file_picker_callback: (cb) => {
              const input = document.createElement('input');
              input.setAttribute('type', 'file');
              input.setAttribute('accept', 'image/*');
              input.onchange = function () {
                const file = input.files[0];
                const reader = new FileReader();
                reader.onload = function () {
                  const id = 'blobid' + new Date().getTime();
                  const blobCache = window.tinymce.activeEditor.editorUpload.blobCache;
                  const base64 = reader.result.split(',')[1];
                  const blobInfo = blobCache.create(id, file, base64);
                  blobCache.add(blobInfo);
                  cb(blobInfo.blobUri(), { title: file.name });
                };
                reader.readAsDataURL(file);
              };
              input.click();
            },
          }}
          initialValue=""
          onEditorChange={(content) => setValue(content)} // Update value state
        />
      </section>
    </main>
  );
}
// import "quill-mention/dist/quill.mention.css"; // Mention plugin styles

// Import necessary Quill modules
// import Quill from "quill";
// import { Mention } from "quill-mention"; // Mention Plugin
// // import { ImageResize } from 'quill-image-resize-module';
// import EmojiPicker from 'emoji-picker-react';

// // Register the Mention and Image Resize module with Quill
// Quill.register("modules/mention", Mention);
// // Quill.register('modules/imageResize', ImageResize);

// export default function Editor() {
//   const [value, setValue] = useState("");
//   // const [showEmojiPicker, setShowEmojiPicker] = useState(false);

//   // Toolbar options with additional buttons for emoji and video
//   const toolbarOptions = [
//     [{ header: [1, 2, 3, false] }],
//     ["bold", "italic", "underline", "strike", "blockquote"],
//     [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
//     ["link", "image", "video"],
//     ["clean"],
//     [{ align: [] }],
//     [{ color: [] }, { background: [] }],
//     ["emoji"], // Custom button for emoji
//   ];

//   // Available formats in the editor
//   const formats = [
//     "header",
//     "font",
//     "size",
//     "bold",
//     "italic",
//     "underline",
//     "strike",
//     "blockquote",
//     "list",
//     "bullet",
//     "indent",
//     "link",
//     "image",
//     "video",
//     "color",
//     "emoji",
//     "align",
//   ];

//   // Mention options for users
//   const mentionOptions = {
//     mentionDenotationChars: ["@"],
//     source: (searchTerm:string, renderList) => {
//       const users = [
//         { id: 1, value: "John Doe" },
//         { id: 2, value: "Jane Smith" },
//         { id: 3, value: "Quill User" },
//       ];
//       const matches = users.filter((user) =>
//         user.value.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       renderList(matches, searchTerm);
//     },
//   };

//   // Define the Quill modules, including the Mention and Image Resize modules
//   const modules = {
//     toolbar: toolbarOptions,
//     // imageResize: { // Enable the image resize functionality
//     //   modules: ['Resize', 'DisplaySize', 'Toolbar'],
//     //   parchment: Quill.import('parchment')
//     // },
//     mention: mentionOptions, // Enable mention functionality
//     video: true, // Enable video embedding
//   };

//   return (
//     <main className="min-h-screen w-screen flex flex-col justify-start items-center">
//       <section className="w-[95%] h-screen flex flex-col justify-center items-center">
//         {/* ReactQuill component */}
//         <ReactQuill
//           value={value}
//           onChange={setValue}
//           theme="snow"
//           modules={modules}
//           formats={formats}
//           className="w-full h-full"
//           placeholder="Start typing..."
//         />
//         <EmojiPicker/>
//       </section>
//     </main>
//   );
// }
