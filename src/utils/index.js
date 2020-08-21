const statusColor = (status) => {
  let color;
  switch (status) {
    case "New job":
      color = "purple"
      break;
    case "In progress":
      color = "blue"
      break;
    case "Awaiting parts":
      color = "orange"
      break;
    case "Ready for collection":
      color ="green"
      break;
    default:
      break;
  }
  return color;
}

export { statusColor }