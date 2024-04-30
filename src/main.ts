enum ErrorCode {
    Timeout = "timeout",
}

interface APIError {
    HTTPStatusCode: number;
    ErrorCode: string;
    ErrorDescription: string;
    ErrorDocumentationLink: string;
}

const Errors: Record<ErrorCode, APIError> = {
    [ErrorCode.Timeout]: {
        HTTPStatusCode: 500,
        ErrorCode: "timeout_error",
        ErrorDescription:
            "The screenshot couldn't be taken within the specified timeout. Either the site doesn't respond quickly, or rendering takes longer than expected. Play with the `timeout` or the `navigation_timeout` options or reach the support for the investigation.",
        ErrorDocumentationLink: "https://screenshotone.com/docs/errors/",
    },
};

export function APIError(code: ErrorCode) {
    return Errors[code];
}
