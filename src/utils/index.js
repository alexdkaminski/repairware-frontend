const statusColor = (status) => {
  let color;
  switch (status) {
    case "New job":
      color = "bg-purple-100 text-purple-800"
      break;
    case "In progress":
      color = "bg-blue-100 text-blue-800"
      break;
    case "Awaiting parts":
      color = "bg-orange-100 text-orange-800"
      break;
    case "Ready for collection":
      color ="bg-green-100 text-green-800"
      break;
    default:
      break;
  }
  return color;
}

export { statusColor }