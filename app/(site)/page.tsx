import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      {/* <h1 className="text-7xl font-extrabold">
        Hello I&apos;m
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          {" "}
          Mr.Bot!
        </span>
      </h1>
      <p className="mt-3 text-xl text-gray-600">
        Aloha everyone! Check out my projects!
      </p> */}
      <h2 className="mt-4 font-bold text-gray-700 text-3xl">
        Related Articles
      </h2>
      {projects.map((project) => (
        <div
          key={project._id}
          className="mt-5 flex flex-col justify-center items-center w-[620px]"
        >
          <div className="max-w-full flex space-x-5 ">
            <div
              className="h-[342px] w-[400px] border border-black rounded-2xl"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Content inside the div */}
              {/* <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              /> */}
              <div className={`text-right p-2 text-white absolute bottom-96`}>
                {project.name}
              </div>
            </div>
            <div
              className="h-[342px] w-[200px] border border-black rounded-2xl"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div
            className="w-[620px] h-52 border border-black mt-5 rounded-2xl"
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div></div>
          </div>
          <div className="mt-5 flex space-x-5">
            <div
              className="h-[354px] w-[240px] rounded-2xl border border-black"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="space-y-3">
              <div
                className="h-[171px] w-[360px] border rounded-2xl border-black"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className="h-[171px] w-[360px] rounded-2xl border border-black"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
        </div>
      ))}

      {/* <div className="mt-5 grid md:grid-cols-2">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div> */}
    </div>
  );
}
