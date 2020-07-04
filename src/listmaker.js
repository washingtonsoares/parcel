class ListMaker {
  listHtml = "<div><ul>{0}</ul></div>";
  listItemHtml = "<li>{0}</li>";
  lists = {};
  listsOutput = "";

  constructor(listsObj = {}) {
    this.lists = listsObj;
  }

  makeList = list => {
    let listItemsOutput = "";

    list.forEach(
      listItem =>
        (listItemsOutput += this.listItemHtml.replace("{0}", listItem))
    );

    return this.listHtml.replace("{0}", listItemsOutput);
  };

  generateLists = () => {
    // loop through our list arrays from our initial lists object
    // passed in via props
    Object.entries(this.lists).forEach(([key, value]) => {
      if (Array.isArray(value) && value.length) {
        this.listsOutput += this.makeList(value);
      }
    });
  };
}

export default ListMaker;
