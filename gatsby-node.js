exports.createPages = ({ actions: { createPage } }) => {
  const projects = require("./src/data/projects.json")
  projects.forEach(project => {
    createPage({
      path: `/work/${project.slug}`,
      component: require.resolve("./src/templates/project_template.jsx"),
      context: {
        project,
      },
    })
  })
}
