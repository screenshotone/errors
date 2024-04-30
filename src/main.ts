export enum ErrorCode {
    Timeout = "timeout_error",
}

interface APIError {
    httpStatusCode: number;
    code: string;
    title: string;
    description: string;
    documentationUrl: string;
}

const allErrors: Record<ErrorCode, APIError> = {
    [ErrorCode.Timeout]: {
        httpStatusCode: 500,
        title: "Timeout",
        code: "timeout_error",
        description:
            "The screenshot couldn't be taken within the specified timeout. Either the site doesn't respond quickly, or rendering takes longer than expected. Play with the `timeout` or the `navigation_timeout` options or reach the support for the investigation.",
        documentationUrl: "https://screenshotone.com/docs/errors/",
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
