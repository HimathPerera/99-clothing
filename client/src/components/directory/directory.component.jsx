import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import {connect} from "react-redux"

import { createStructuredSelector} from "reselect"
import { selectDirectorySections } from "../../redux/directory/directory.selector"

import "./directory.styles.scss";

const  Directory=({sections})=> {
  const MenuItems = sections.map((items) => {
    return (
      <MenuItem
        key={items.id}
        title={items.title}
        imageUrl={items.imageUrl}
        size={items.size}
        linkUrl={items.linkUrl}
      />
    );
  });
  return <div className="directory-menu">{MenuItems}</div>;
}

const mapStateToProps = createStructuredSelector({
  sections:selectDirectorySections
})



export default connect(mapStateToProps)(Directory)