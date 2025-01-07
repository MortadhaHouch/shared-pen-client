import { BentoDemo } from "@/components/main/Bento";
import { GridBackground } from "@/components/main/GridBackground";
import { SpotlightPreview } from "@/components/main/SpotlightPreview";

export default function Home() {
  return (
    <main className='w-full min-h-[100vh] flex flex-col justify-start items-center flex-wrap'>
      <section className="w-full flex flex-col justify-center items-center gap-2">
        <GridBackground>
          <SpotlightPreview/>
        </GridBackground>
      </section>
      <section className="w-full flex flex-col justify-center items-center p-8 gap-2">
        <BentoDemo/>
      </section>
    </main>
  );
}
