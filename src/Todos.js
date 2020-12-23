import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function Todos({ todo }) {
  return (
    <List>
      <ListItem>
        <ListItemText
          primary={todo}
          //  secondary="Jan 9, 2014"
        />
      </ListItem>
    </List>
  );
}
