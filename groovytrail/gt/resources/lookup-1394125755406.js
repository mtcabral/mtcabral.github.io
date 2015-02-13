(function(window, undefined) {
  var dictionary = {
    "51b60a12-cd69-41a9-be68-6054f83804d3": "Levada_view_check",
    "18bc4b4a-c172-4bec-a6e3-408961bc4ee3": "Levada_view_start",
    "01aacb32-20e2-4914-8ab3-8a948603802b": "Levada_view_2",
    "151bd419-5efc-4b88-8d0a-d06ddceec1f1": "Levada_view_1",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Splash Screen",
    "385a93b1-8296-495e-9610-612dde4eae45": "Levada_view_END",
    "0e2b78f5-7d5d-4d5b-a4ef-3f8f07c8cd7d": "Profile",
    "e61f7ac7-386e-40dd-a483-4e2888182eb5": "Levada_view",
    "9d0e2c4c-9895-4620-b4af-179ed4d56ff5": "Home_view",
    "b107c292-d618-44ed-92b9-c0e4c8f26e0b": "Login Screen",
    "67eb6f76-b736-4cab-856c-f34956fd8fd5": "Levada_view_3",
    "4e44a0ed-0e2f-41e5-887e-70ba84eccfed": "Interior_page",
    "75d1867e-4513-4b2e-8dc6-057b663ee0b9": "Interior_landscape",
    "d6e3dc51-3551-4ae1-9940-ccc6e3c58314": "Master_Template",
    "6cae5a75-4816-4a82-9d78-b99010614eb0": "Master_Template white"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);