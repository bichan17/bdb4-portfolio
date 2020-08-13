const visit = require("unist-util-visit");
const extend = require("extend");

module.exports = wrapLinkContent;

//extend remark to add a wrapping span to link content

//provide element tag name with element
//use contentProperties to add attributes to wrapping tag

//note: does not seem to work with block elements?

/*
example:

remark()
  .use(wrapLinkContent, {
    element: "span",
    contentProperties: {
      className: ["link-inner"],
    },
  })

*/

const defaultOptions = {
  element: "span",
  contentProperties: {},
};

function wrapLinkContent(options) {
  const { element, contentProperties } = options || defaultOptions;

  return transform;

  function transform(tree) {
    visit(tree, ["link", "linkReference"], visitor);

    function visitor(node) {
      const nodeChildren = node.children;
      node.children = [];

      node.children.push({
        type: "element",
        children: [],
        data: {
          hName: element,
          hProperties: extend(true, contentProperties),
          hChildren: extend(true, nodeChildren),
        },
      });
    }
  }
}
