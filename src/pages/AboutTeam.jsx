function AboutTeam() {
  return (
    <section className="w-full py-12">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 xl:gap-10">
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet the Team
            </h2>
            <p className="max-w-[500px] text-gray-500 md:text-xl dark:text-gray-400">
              Were a team of passionate individuals with a shared mission to
              make the web accessible to all.
            </p>
          </div>
        </div>
        <div className="grid max-w-sm gap-4 lg:max-w-none lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col gap-2">
            <img
              alt="Person"
              className="rounded-lg object-cover"
              height="250"
              src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1385&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{
                aspectRatio: "200/250",
                objectFit: "cover",
              }}
              width="200"
            />
            <div className="space-y-2">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold tracking-tighter">
                  Alice Johnson
                </h3>
                <p className="text-gray-500 dark:text-gray-400">Designer</p>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Alice is a multi-disciplinary designer with a passion for
                creating beautiful and intuitive user experiences. She has been
                working in the design industry for over a decade and has a keen
                eye for detail. In her free time, she enjoys experimenting with
                new design tools and techniques to push the boundaries of
                creativity.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <img
              alt="Person"
              className="rounded-lg object-cover"
              height="250"
              src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1385&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{
                aspectRatio: "200/250",
                objectFit: "cover",
              }}
              width="200"
            />
            <div className="space-y-2">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold tracking-tighter">
                  Mark Lee
                </h3>
                <p className="text-gray-500 dark:text-gray-400">Developer</p>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Mark is a full-stack developer with a passion for building
                elegant and efficient web applications. He is experienced in a
                wide range of programming languages and frameworks and is always
                eager to learn new technologies. In his spare time, Mark enjoys
                contributing to open-source projects and attending hackathons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTeam;
