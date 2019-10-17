
export function trimTitleFit(desc) {
  if (desc.length < 27) {
    return desc
  } else {
    return desc.substring(0,23).concat('..')
  }
}

export function trimDesc(desc) {
  if (desc.length < 256) {
    return desc
  } else {
    return desc.substring(0,254).concat('..')
  }
}
