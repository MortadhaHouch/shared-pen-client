import Gravity from '@/components/main/Gravity';
import { FaEdit, FaCloudUploadAlt, FaUsers, FaLock } from 'react-icons/fa';

export default function Features() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-bold mb-8">Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          icon={<FaEdit size={50} />}
          title="Rich Text Editing"
          description="Create and edit documents with our powerful rich text editor."
        />
        <FeatureCard
          icon={<FaCloudUploadAlt size={50} />}
          title="Cloud Storage"
          description="Save your documents securely in the cloud and access them from anywhere."
        />
        <FeatureCard
          icon={<FaUsers size={50} />}
          title="Collaboration"
          description="Collaborate with your team in real-time and see changes instantly."
        />
        <FeatureCard
          icon={<FaLock size={50} />}
          title="Security"
          description="Your documents are protected with top-notch security measures."
        />
      </div>
      <Gravity/>
    </main>
  );
}

function FeatureCard({ icon, title, description }:{icon:JSX.Element, title:string, description:string}) {
  return (
    <div className=" p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
      <div className="text-blue-500 mb-4">{icon}</div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}