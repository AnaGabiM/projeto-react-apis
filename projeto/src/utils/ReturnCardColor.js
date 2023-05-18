export const getColors = (types) => {
    switch(types) {
      case "bug":
        return "#76A866";
      case "fire":
        return "#EAAB7D";
      case "flying":
        return "#6892B0";
      case "grass":
        return "#729F92";
      case "normal":
        return "#BF9762";
      case "poison":
        return "#AD61AE";
      case "water":
        return "#71C3FF";
      default:
        return "#BF9762";
    }
  };
