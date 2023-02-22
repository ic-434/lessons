//import jQuery, { data } from "jquery";
import jQuery from "jquery";

jQuery.get("./api", data => {
  //  data.forEach(File => {
        console.log(data);
        //jQuery("body").append(`<h1>jQuery{file}</h1>`)
    })
//}, "JSON");

