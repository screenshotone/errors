export enum ErrorCode {
    Timeout = "timeout_error",
    StorageAccessDenied = "storage_access_denied",
    ScriptTriggersRedirect = "script_triggers_redirect",
    InternalApplicationError = "internal_application_error",
    UsageQuotaExceeded = "screenshots_limit_reached",
}

interface APIError {
    httpStatusCode: number;
    code: string;
    title: string;
    description: string;
    documentationUrl: string;
}

const allErrors: Record<ErrorCode, APIError> = {
    [ErrorCode.UsageQuotaExceeded]: {
        httpStatusCode: 400,
        title: "Usage Quota Exceeded",
        code: "screenshots_limit_reached",
        description:
            "The usage quota has been exceeded. Please, either upgrade to a plan with more quota or change the maximum allowed limit (if possible) in the ScreenshotOne dashboard. If it is a mistake, please, reach out at `support@screenshotone.com.`",
        documentationUrl:
            "https://screenshotone.com/docs/errors/usage-quota-exceeded/",
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
