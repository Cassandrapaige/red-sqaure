exports.createPages = ({ actions: { createPage } }) => {
  const projects = require("./src/data/projects.json")
  projects.forEach((project, index) => {
    const { slug } = project
    createPage({
      path: `/work/${slug}`,
      component: require.resolve("./src/templates/project_template.jsx"),
      context: {
        slug,
        next: index === projects.length - 1 ? projects[0] : projects[index + 1],
      },
    })
  })
}
