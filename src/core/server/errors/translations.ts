import { ERROR_CODES } from "coral-common/errors";

export const ERROR_TRANSLATIONS: Record<ERROR_CODES, string> = {
  COMMENT_BODY_EXCEEDS_MAX_LENGTH: "error-commentBodyExceedsMaxLength",
  COMMENT_BODY_TOO_SHORT: "error-commentBodyTooShort",
  COMMENT_NOT_FOUND: "error-commentNotFound",
  COMMENT_REVISION_NOT_FOUND: "error-commentRevisionNotFound",
  COMMENTING_DISABLED: "error-commentingDisabled",
  DUPLICATE_EMAIL: "error-duplicateEmail",
  DUPLICATE_STORY_ID: "error-duplicateStoryID",
  DUPLICATE_STORY_URL: "error-duplicateStoryURL",
  DUPLICATE_USER: "error-duplicateUser",
  EMAIL_ALREADY_SET: "error-emailAlreadySet",
  EMAIL_EXCEEDS_MAX_LENGTH: "error-emailExceedsMaxLength",
  EMAIL_INVALID_FORMAT: "error-emailInvalidFormat",
  EMAIL_NOT_SET: "error-emailNotSet",
  INTERNAL_ERROR: "error-internalError",
  LOCAL_PROFILE_ALREADY_SET: "error-localProfileAlreadySet",
  LOCAL_PROFILE_NOT_SET: "error-localProfileNotSet",
  SSO_PROFILE_NOT_SET: "error-SSOProfileNotSet",
  NOT_FOUND: "error-notFound",
  PASSWORD_TOO_SHORT: "error-passwordTooShort",
  STORY_CLOSED: "error-storyClosed",
  STORY_NOT_FOUND: "error-storyNotFound",
  STORY_URL_NOT_PERMITTED: "error-storyURLNotPermitted",
  TENANT_INSTALLED_ALREADY: "error-tenantInstalledAlready",
  TENANT_NOT_FOUND: "error-tenantNotFound",
  TOKEN_INVALID: "error-tokenInvalid",
  TOKEN_NOT_FOUND: "error-tokenNotFound",
  USER_NOT_ENTITLED: "error-userNotEntitled",
  USER_NOT_FOUND: "error-userNotFound",
  USER_CANNOT_BE_IGNORED: "error-userCannotBeIgnored",
  USERNAME_ALREADY_SET: "error-usernameAlreadySet",
  USERNAME_CONTAINS_INVALID_CHARACTERS:
    "error-usernameContainsInvalidCharacters",
  USERNAME_EXCEEDS_MAX_LENGTH: "error-usernameExceedsMaxLength",
  USERNAME_TOO_SHORT: "error-usernameTooShort",
  AUTHENTICATION_ERROR: "error-authenticationError",
  INVALID_CREDENTIALS: "error-invalidCredentials",
  TOXIC_COMMENT: "error-toxicComment",
  SPAM_COMMENT: "error-spamComment",
  USER_ALREADY_SUSPENDED: "error-userAlreadySuspended",
  USER_ALREADY_BANNED: "error-userAlreadyBanned",
  USER_BANNED: "error-userBanned",
  USER_SITE_BANNED: "error-userSiteBanned",
  USER_SUSPENDED: "error-userSuspended",
  USER_WARNED: "error-userWarned",
  INTEGRATION_DISABLED: "error-integrationDisabled",
  PASSWORD_RESET_TOKEN_EXPIRED: "error-passwordResetTokenExpired",
  EMAIL_CONFIRM_TOKEN_EXPIRED: "error-emailConfirmTokenExpired",
  RATE_LIMIT_EXCEEDED: "error-rateLimitExceeded",
  JWT_REVOKED: "error-jwtRevoked",
  INVITE_TOKEN_EXPIRED: "error-inviteTokenExpired",
  INVITE_REQUIRES_EMAIL_ADDRESSES: "error-inviteRequiresEmailAddresses",
  LIVE_UPDATES_DISABLED: "error-liveUpdatesDisabled",
  PASSWORD_INCORRECT: "error-passwordIncorrect",
  USERNAME_UPDATED_WITHIN_WINDOW: "error-usernameAlreadyUpdated",
  PERSISTED_QUERY_NOT_FOUND: "error-persistedQueryNotFound",
  RAW_QUERY_NOT_AUTHORIZED: "error-rawQueryNotAuthorized",
  USER_ALREADY_PREMOD: "error-userAlreadyPremod",
  INVITE_INCLUDES_EXISTING_USER: "error-inviteIncludesExistingUser",
  REPEAT_POST: "error-repeatPost",
  INSTALLATION_FORBIDDEN: "error-installationForbidden",
  SCRAPE_FAILED: "error-scrapeFailed",
  DUPLICATE_SITE_ORIGIN: "error-duplicateSiteOrigin",
  VALIDATION: "error-validation",
  USER_BIO_TOO_LONG: "error-userBioTooLong",
  COMMENT_EDIT_WINDOW_EXPIRED: "error-commentEditWindowExpired",
  AUTHOR_ALREADY_HAS_RATED_STORY: "error-authorAlreadyHasRatedStory",
  CANNOT_CREATE_COMMENT_ON_ARCHIVED_STORY:
    "error-cannotCreateCommentOnArchivedStory",
  CANNOT_OPEN_AN_ARCHIVED_STORY: "error-cannotOpenAnArchivedStory",
  CANNOT_MERGE_AN_ARCHIVED_STORY: "error-cannotMergeAnArchivedStory",
};
