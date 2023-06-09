export { loginUser, logout, changePassword, refresh } from "./auth";

export {
  getFooterData,
  getHomePageData,
  getAboutPageData,
  getUsefullInfoData,
} from "./pagesOperations";

export { getContacts, sendContacts } from "./adminContactsOperations";
export { getCards, sendCard, deleteCard } from "./adminCardsOperations";
export {
  sendPartner,
  getPartners,
  deletePartner,
} from "./adminPartnersOperations";
export { sendReport, deleteReport, getReport } from "./adminReportOperations";
export { sendSlide, getSlider, deleteSlide } from "./adminSliderOperations";
