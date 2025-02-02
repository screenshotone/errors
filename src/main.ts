export enum ErrorCode {
    Timeout = "timeout_error",
    StorageAccessDenied = "storage_access_denied",
    ScriptTriggersRedirect = "script_triggers_redirect",
    InternalApplicationError = "internal_application_error",
    UsageQuotaExceeded = "screenshots_limit_reached",
    RequestAborted = "request_aborted",
    AccessKeyRequired = "access_key_required",
    AccessKeyInvalid = "access_key_invalid",
    SignatureRequired = "signature_is_required",
    SignatureInvalid = "signature_is_not_valid",
    ConcurrencyLimitReached = "concurrency_limit_reached",
    RequestInvalid = "request_not_valid",
    SelectorNotFound = "selector_not_found",
    NameNotResolved = "name_not_resolved",
    NetworkError = "network_error",
    InvalidStorageConfiguration = "invalid_storage_configuration",
    HostReturnedError = "host_returned_error",
    StorageReturnedTransientError = "storage_returned_transient_error",
    ContentContainsSpecifiedString = "content_contains_specified_string",
    ContentMissingSpecifiedString = "content_missing_specified_string",
    TemporaryUnavailable = "temporary_unavailable",
    ResultingImageTooLarge = "resulting_image_too_large",
    InvalidCookieParameter = "invalid_cookie_parameter",
}

interface APIError {
    httpStatusCode: number;
    code: string;
    title: string;
    description: string;
    documentationUrl: string;
}

const allErrors: Record<ErrorCode, APIError> = {
    [ErrorCode.InvalidCookieParameter]: {
        httpStatusCode: 400,
        title: "Invalid Cookie Parameter",
        code: "invalid_cookie_parameter",
        description:
            "The `cookies` parameters you provided are invalid. Please, consider providing different values and adhere to the format specified in the ScreenshotOne documentation.",
        documentationUrl:
            "https://screenshotone.com/docs/errors/invalid-cookie-parameter/",
    },
    [ErrorCode.SelectorNotFound]: {
        httpStatusCode: 400,
        title: "Selector Not Found",
        code: "selector_not_found",
        description:
            "If `selector` is specified and `error_on_selector_not_found`=true, or `click` is specified and `error_on_click_selector_not_found`=true, the error will be returned if the element by selector is not visible or it took more than timeout seconds to render it, but not more than 30 seconds.",
        documentationUrl:
            "https://screenshotone.com/docs/errors/selector-not-found/",
    },
    [ErrorCode.ResultingImageTooLarge]: {
        httpStatusCode: 400,
        title: "Resulting Image Too Large",
        code: "resulting_image_too_large",
        description:
            "The resulting image is too large for the specified format.",
        documentationUrl:
            "https://screenshotone.com/docs/errors/resulting-image-too-large/",
    },
    [ErrorCode.NameNotResolved]: {
        httpStatusCode: 400,
        title: "Name Not Resolved",
        code: "name_not_resolved",
        description:
            "Usually, the error happens when the domain name of the requested URL is not resolved. If you are trying to take a screenshot of the new site, please, wait a bit until the DNS records are refreshed.",
        documentationUrl:
            "https://screenshotone.com/docs/errors/name-not-resolved/",
    },
    [ErrorCode.NetworkError]: {
        httpStatusCode: 500,
        title: "Network Error",
        code: "network_error",
        description:
            "The error happens when the API can't connect to the provided URL. It might mean that the site blocks the API or is temporarily unavailable. Generally, you can safely retry to take a screenshot.",
        documentationUrl:
            "https://screenshotone.com/docs/errors/network-error/",
    },
    [ErrorCode.InvalidStorageConfiguration]: {
        httpStatusCode: 400,
        title: "Invalid Storage Configuration",
        code: "invalid_storage_configuration",
        description:
            "If you haven't created the bucket in the `us-east-1` AWS region, please, specify your bucket region through an endpoint in a format like https://s3.<your-region>.amazonaws.com.",
        documentationUrl:
            "https://screenshotone.com/docs/errors/invalid-storage-configuration/",
    },
    [ErrorCode.StorageReturnedTransientError]: {
        httpStatusCode: 400,
        title: "Storage Returned Transient Error",
        code: "storage_returned_transient_error",
        description:
            "The storage returned an HTTP status code between 500 and 599 and we exhausted retries. You can likely retry the request again.",
        documentationUrl:
            "https://screenshotone.com/docs/errors/storage-returned-transient-error/",
    },
    [ErrorCode.HostReturnedError]: {
        httpStatusCode: 500,
        title: "Host Returned Error",
        code: "host_returned_error",
        description:
            "If the host doesn't respond successfully within the range of 200-299 status codes, the API won't take a screenshot. You can force the API to take a screenshot of the error page by specifying `ignore_host_errors`=true. You can get the returned status code from the site by reading the `returned_status_code` field.",
        documentationUrl:
            "https://screenshotone.com/docs/errors/host-returned-error/",
    },
    [ErrorCode.ContentMissingSpecifiedString]: {
        httpStatusCode: 500,
        title: "Content Missing Specified String",
        code: "content_missing_specified_string",
        description:
            "The page content is missing the specified string by the `fail_if_content_missing` option. If it seems to be a mistake or not what you expected, please, reach out to `support@screenshotone.com` as quickly as possible, and will assist and try to resolve your problem.",
        documentationUrl:
            "https://screenshotone.com/docs/errors/content-missing-specified-string/",
    },
    [ErrorCode.ContentContainsSpecifiedString]: {
        httpStatusCode: 500,
        title: "Content Contains Specified String",
        code: "content_contains_specified_string",
        description:
            "The page content contains the specified string by the `fail_if_content_contains` option. If it seems to be a mistake or not what you expected, please, reach out to `support@screenshotone.com` as quickly as possible, and will assist and try to resolve your problem.",
        documentationUrl:
            "https://screenshotone.com/docs/errors/content-contains-specified-string/",
    },
    [ErrorCode.TemporaryUnavailable]: {
        httpStatusCode: 503,
        title: "Temporary Unavailable",
        code: "temporary_unavailable",
        description:
            "The API is temporarily unavailable due to an error or overload. Please wait a bit and then safely retry your request.",
        documentationUrl:
            "https://screenshotone.com/docs/errors/temporary-unavailable/",
    },
    [ErrorCode.UsageQuotaExceeded]: {
        httpStatusCode: 400,
        title: "Usage Quota Exceeded",
        code: "screenshots_limit_reached",
        description:
            "The usage quota has been exceeded. Please, either upgrade to a plan with more quota or change the maximum allowed limit (if possible) in the ScreenshotOne dashboard. If it is a mistake, please, reach out at `support@screenshotone.com.`",
        documentationUrl:
            "https://screenshotone.com/docs/errors/usage-quota-exceeded/",
    },
    [ErrorCode.SignatureInvalid]: {
        httpStatusCode: 400,
        title: "Signature Invalid",
        code: "signature_is_not_valid",
        description:
            "You provided the `signature` parameter, but it is not valid. Make sure you use the correct signing algorithm—https://screenshotone.com/docs/signed-requests/.",
        documentationUrl:
            "https://screenshotone.com/docs/errors/signature-is-invalid/",
    },
    [ErrorCode.SignatureRequired]: {
        httpStatusCode: 400,
        title: "Signature Required",
        code: "signature_is_required",
        description:
            "The `signature` parameter is required. Because signing requests is required in the access page—https://dash.screenshotone.com/access. Make sure you use the correct signing algorithm—https://screenshotone.com/docs/signed-requests/.",
        documentationUrl:
            "https://screenshotone.com/docs/errors/signature-is-required/",
    },
    [ErrorCode.ConcurrencyLimitReached]: {
        httpStatusCode: 400,
        title: "Concurrency Limit Reached",
        code: "concurrency_limit_reached",
        description:
            "You reached the request concurrency limit, retry after a while. Or feel free to upgrade you current plan—https://dash.screenshotone.com/subscription.",
        documentationUrl:
            "https://screenshotone.com/docs/errors/concurrency-limit-reached/",
    },
    [ErrorCode.RequestInvalid]: {
        httpStatusCode: 400,
        title: "Request Invalid",
        code: "request_not_valid",
        description:
            "The request parameters are not valid. You can look at the `error_details` response field to get more details.",
        documentationUrl:
            "https://screenshotone.com/docs/errors/request-invalid/",
    },
    [ErrorCode.AccessKeyRequired]: {
        httpStatusCode: 400,
        title: "Access Key Required",
        code: "access_key_required",
        description:
            "The `access_key` parameter is required. Please, check out the access dashboard page to get the access key—https://dash.screenshotone.com/access.",
        documentationUrl:
            "https://screenshotone.com/docs/errors/access-key-required/",
    },
    [ErrorCode.AccessKeyInvalid]: {
        httpStatusCode: 400,
        title: "Access Key Invalid",
        code: "access_key_invalid",
        description:
            "The `access_key` parameter is set, but it is not correct. Please, check out the access dashboard page to get the access key—https://dash.screenshotone.com/access.",
        documentationUrl:
            "https://screenshotone.com/docs/errors/access-key-invalid/",
    },
    [ErrorCode.InternalApplicationError]: {
        httpStatusCode: 500,
        title: "Internal Application Error",
        code: "internal_application_error",
        description:
            "The API failed to serve your request. You can try replay the request. If the error is repeated after a few retries, please, reach out at `support@screenshotone.com.`",
        documentationUrl:
            "https://screenshotone.com/docs/errors/internal-application-error/",
    },
    [ErrorCode.Timeout]: {
        httpStatusCode: 500,
        title: "Timeout",
        code: "timeout_error",
        description:
            "The screenshot couldn't be taken within the specified timeout. Either the site doesn't respond quickly, or rendering takes longer than expected. Play with the `timeout` or the `navigation_timeout` options or reach the support for the investigation.",
        documentationUrl: "https://screenshotone.com/docs/errors/timeout/",
    },
    [ErrorCode.StorageAccessDenied]: {
        httpStatusCode: 400,
        title: "Storage Access Denied",
        code: "storage_access_denied",
        description:
            "Failed to upload the screenshot to the storage since access was denied. Check the API keys you specify when using the storage integration.",
        documentationUrl:
            "https://screenshotone.com/docs/errors/storage-access-denied/",
    },
    [ErrorCode.ScriptTriggersRedirect]: {
        httpStatusCode: 400,
        title: "Script Triggers Redirect",
        code: "script_triggers_redirect",
        description:
            'The specified "scripts" option might trigger a redirect, please, specify the "scripts_wait_until" option. If you think it is a mistake, please, reach out at `support@screenshotone.com`.',
        documentationUrl:
            "https://screenshotone.com/docs/errors/script-triggers-redirect/",
    },
    [ErrorCode.RequestAborted]: {
        httpStatusCode: 500,
        title: "Request Aborted",
        code: "request_aborted",
        description:
            "The request was aborted either by the user or the intermediate proxies and can't be fulfilled. If the error persists, please, reach out to `support@screenshotone.com`.",
        documentationUrl:
            "https://screenshotone.com/docs/errors/request-aborted/",
    },
};

export function APIErrorByCode(code: string) {
    for (const error of Object.values(allErrors)) {
        if (error.code == code) {
            return error;
        }
    }

    return null;
}

export function APIError(code: ErrorCode) {
    return allErrors[code];
}
