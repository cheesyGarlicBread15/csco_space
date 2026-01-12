export { };

declare global {
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                "filpass-verifier": {
                    width?: string;
                    accessToken?: string;
                };
            }
        }
    }
}
