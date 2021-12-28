import { Popup, Overlay, Cell, CellGroup, Icon, Tag } from "vant";

const vant = {
  install(app) {
    app.use(Popup);
    app.use(Overlay);
    app.use(Cell);
    app.use(CellGroup);
    app.use(Icon);
    app.use(Tag);
  },
};

export default vant;
