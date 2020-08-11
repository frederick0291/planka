const PREFIX = '@entry';

export default {
  PREFIX,

  /* Login */

  AUTHENTICATE: `${PREFIX}/AUTHENTICATE`,
  AUTHENTICATE_ERROR_CLEAR: `${PREFIX}/AUTHENTICATE_ERROR_CLEAR`,
  LOGOUT: `${PREFIX}/LOGOUT`,

  /* Modal */

  MODAL_OPEN: `${PREFIX}/MODAL_OPEN`,
  MODAL_CLOSE: `${PREFIX}/MODAL_CLOSE`,

  /* User */

  USER_CREATE: `${PREFIX}/USER_CREATE`,
  USER_CREATE_ERROR_CLEAR: `${PREFIX}/USER_CREATE_ERROR_CLEAR`,
  USER_UPDATE: `${PREFIX}/USER_UPDATE`,
  CURRENT_USER_UPDATE: `${PREFIX}/CURRENT_USER_UPDATE`,
  CURRENT_USER_EMAIL_UPDATE: `${PREFIX}/CURRENT_USER_EMAIL_UPDATE`,
  CURRENT_USER_EMAIL_UPDATE_ERROR_CLEAR: `${PREFIX}/CURRENT_USER_EMAIL_UPDATE_ERROR_CLEAR`,
  CURRENT_USER_PASSWORD_UPDATE: `${PREFIX}/CURRENT_USER_PASSWORD_UPDATE`,
  CURRENT_USER_PASSWORD_UPDATE_ERROR_CLEAR: `${PREFIX}/CURRENT_USER_PASSWORD_UPDATE_ERROR_CLEAR`,
  CURRENT_USER_USERNAME_UPDATE: `${PREFIX}/CURRENT_USER_USERNAME_UPDATE`,
  CURRENT_USER_USERNAME_UPDATE_ERROR_CLEAR: `${PREFIX}/CURRENT_USER_USERNAME_UPDATE_ERROR_CLEAR`,
  CURRENT_USER_AVATAR_UPDATE: `${PREFIX}/CURRENT_USER_AVATAR_UPDATE`,
  USER_DELETE: `${PREFIX}/USER_DELETE`,
  USER_TO_CARD_ADD: `${PREFIX}/USER_TO_CARD_ADD`,
  USER_TO_CURRENT_CARD_ADD: `${PREFIX}/USER_TO_CURRENT_CARD_ADD`,
  USER_FROM_CARD_REMOVE: `${PREFIX}/USER_FROM_CARD_REMOVE`,
  USER_FROM_CURRENT_CARD_REMOVE: `${PREFIX}/USER_FROM_CURRENT_CARD_REMOVE`,
  USER_TO_FILTER_IN_CURRENT_BOARD_ADD: `${PREFIX}/USER_TO_FILTER_IN_CURRENT_BOARD_ADD`,
  USER_FROM_FILTER_IN_CURRENT_BOARD_REMOVE: `${PREFIX}/USER_FROM_FILTER_IN_CURRENT_BOARD_REMOVE`,

  /* Project */

  PROJECT_CREATE: `${PREFIX}/PROJECT_CREATE`,
  CURRENT_PROJECT_UPDATE: `${PREFIX}/CURRENT_PROJECT_UPDATE`,
  CURRENT_PROJECT_BACKGROUND_IMAGE_UPDATE: `${PREFIX}/CURRENT_PROJECT_BACKGROUND_IMAGE_UPDATE`,
  CURRENT_PROJECT_DELETE: `${PREFIX}/CURRENT_PROJECT_DELETE`,

  /* Project membership */

  MEMBERSHIP_IN_CURRENT_PROJECT_CREATE: `${PREFIX}/MEMBERSHIP_IN_CURRENT_PROJECT_CREATE`,
  PROJECT_MEMBERSHIP_DELETE: `${PREFIX}/PROJECT_MEMBERSHIP_DELETE`,

  /* Board */

  BOARD_IN_CURRENT_PROJECT_CREATE: `${PREFIX}/BOARD_IN_CURRENT_PROJECT_CREATE`,
  BOARD_FETCH: `${PREFIX}/BOARD_FETCH`,
  BOARD_UPDATE: `${PREFIX}/BOARD_UPDATE`,
  BOARD_MOVE: `${PREFIX}/BOARD_MOVE`,
  BOARD_DELETE: `${PREFIX}/BOARD_DELETE`,

  /* Label */

  LABEL_IN_CURRENT_BOARD_CREATE: `${PREFIX}/LABEL_IN_CURRENT_BOARD_CREATE`,
  LABEL_UPDATE: `${PREFIX}/LABEL_UPDATE`,
  LABEL_DELETE: `${PREFIX}/LABEL_DELETE`,
  LABEL_TO_CARD_ADD: `${PREFIX}/LABEL_TO_CARD_ADD`,
  LABEL_TO_CURRENT_CARD_ADD: `${PREFIX}/LABEL_TO_CURRENT_CARD_ADD`,
  LABEL_FROM_CARD_REMOVE: `${PREFIX}/LABEL_FROM_CARD_REMOVE`,
  LABEL_FROM_CURRENT_CARD_REMOVE: `${PREFIX}/LABEL_FROM_CURRENT_CARD_REMOVE`,
  LABEL_TO_FILTER_IN_CURRENT_BOARD_ADD: `${PREFIX}/LABEL_TO_FILTER_IN_CURRENT_BOARD_ADD`,
  LABEL_FROM_FILTER_IN_CURRENT_BOARD_REMOVE: `${PREFIX}/LABEL_FROM_FILTER_IN_CURRENT_BOARD_REMOVE`,

  /* List */

  LIST_IN_CURRENT_BOARD_CREATE: `${PREFIX}/LIST_IN_CURRENT_BOARD_CREATE`,
  LIST_UPDATE: `${PREFIX}/LIST_UPDATE`,
  LIST_MOVE: `${PREFIX}/LIST_MOVE`,
  LIST_DELETE: `${PREFIX}/LIST_DELETE`,

  /* Card */

  CARD_CREATE: `${PREFIX}/CARD_CREATE`,
  CARD_UPDATE: `${PREFIX}/CARD_UPDATE`,
  CURRENT_CARD_UPDATE: `${PREFIX}/CURRENT_CARD_UPDATE`,
  CARD_MOVE: `${PREFIX}/CARD_MOVE`,
  CURRENT_CARD_MOVE: `${PREFIX}/CURRENT_CARD_MOVE`,
  CARD_TRANSFER: `${PREFIX}/CARD_TRANSFER`,
  CURRENT_CARD_TRANSFER: `${PREFIX}/CURRENT_CARD_TRANSFER`,
  CARD_DELETE: `${PREFIX}/CARD_DELETE`,
  CURRENT_CARD_DELETE: `${PREFIX}/CURRENT_CARD_DELETE`,

  /* Task */

  TASK_IN_CURRENT_CARD_CREATE: `${PREFIX}/TASK_IN_CURRENT_CARD_CREATE`,
  TASK_UPDATE: `${PREFIX}/TASK_UPDATE`,
  TASK_DELETE: `${PREFIX}/TASK_DELETE`,

  /* Attachment */

  ATTACHMENT_IN_CURRENT_CARD_CREATE: `${PREFIX}/ATTACHMENT_IN_CURRENT_CARD_CREATE`,
  ATTACHMENT_UPDATE: `${PREFIX}/ATTACHMENT_UPDATE`,
  ATTACHMENT_DELETE: `${PREFIX}/ATTACHMENT_DELETE`,

  /* Actions */

  ACTIONS_IN_CURRENT_CARD_FETCH: `${PREFIX}/ACTIONS_IN_CURRENT_CARD_FETCH`,

  /* Comment action */

  COMMENT_ACTION_IN_CURRENT_CARD_CREATE: `${PREFIX}/COMMENT_ACTION_IN_CURRENT_CARD_CREATE`,
  COMMENT_ACTION_UPDATE: `${PREFIX}/COMMENT_ACTION_UPDATE`,
  COMMENT_ACTION_DELETE: `${PREFIX}/COMMENT_ACTION_DELETE`,

  /* Notification */

  NOTIFICATION_DELETE: `${PREFIX}/NOTIFICATION_DELETE`,
};