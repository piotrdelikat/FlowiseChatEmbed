declare const chatbot: {
    initFull: (props: {
        chatflowid: string;
        apiHost?: string | undefined;
        callback: Function;
        chatflowConfig?: Record<string, unknown> | undefined;
    } & {
        id?: string | undefined;
    }) => void;
    init: (props: {
        chatflowid: string;
        apiHost?: string | undefined;
        callback: Function;
        chatflowConfig?: Record<string, unknown> | undefined;
    }) => void;
};
export default chatbot;
//# sourceMappingURL=web.d.ts.map