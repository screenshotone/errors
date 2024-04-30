enum ErrorCode {
    Timeout = "timeout",
}

interface APIError {
    httpStatusCode: number;
    code: string;
    description: string;
    documentationUrl: string;
}

const allErrors: Record<ErrorCode, APIError> = {
    [ErrorCode.Timeout]: {
        httpStatusCode: 500,
        code: "timeout_error",
        description:
            "The screenshot couldn't be taken within the specified timeout. Either the site doesn't respond quickly, or rendering takes longer than expected. Play with the `timeout` or the `navigation_timeout` options or reach the support for the investigation.",
        documentationUrl: "https://screenshotone.com/docs/errors/",
    },
};

export function APIErrorByCode(code: string) {
    if ((code as ErrorCode) in allErrors) {
        return allErrors[code as ErrorCode];
    }

    return null;
}

export function APIError(code: ErrorCode) {
    return allErrors[code];
}
