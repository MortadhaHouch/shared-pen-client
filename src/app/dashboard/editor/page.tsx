"use client"
import React, { useEffect, useState } from 'react'
import { Editor as EditorComponent } from '@tinymce/tinymce-react';

export default function Editor() {
  const [value, setValue] = useState('');
  useEffect(()=>{
    console.log(value);
  },[value])
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
            file_picker_callback: (cb, value, meta) => {
              const input = document.createElement('input');
              input.setAttribute('type', 'file');
              input.setAttribute('accept', 'image/*');
              input.onchange = function () {
                const file = this.files[0];
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
