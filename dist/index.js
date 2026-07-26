const isBrowser = typeof window !== 'undefined' && typeof navigator !== 'undefined';
let cachedDeviceContext = null;
function getDeviceContext() {
    if (!isBrowser) {
        return {
            isMobile: false,
            isTablet: false,
            isDesktop: false,
            isTouchDevice: false,
            browser: 'unknown',
            os: 'unknown'
        };
    }
    if (cachedDeviceContext)
        return cachedDeviceContext;
    const ua = navigator.userAgent.toLowerCase();
    const maxTouchPoints = navigator.maxTouchPoints || 0;
    // OS Detection
    let os = 'other';
    if (/windows/i.test(ua))
        os = 'windows';
    else if (/mac/i.test(ua))
        os = maxTouchPoints > 1 ? 'ios' : 'macos'; // iPadOS 13+ spoofing fix
    else if (/iphone|ipad|ipod/i.test(ua))
        os = 'ios';
    else if (/android/i.test(ua))
        os = 'android';
    else if (/linux/i.test(ua))
        os = 'linux';
    // Browser Detection (Order matters)
    let browser = 'other';
    if (/edg/i.test(ua))
        browser = 'edge';
    else if (/whale/i.test(ua))
        browser = 'whale';
    else if (/opr|opera/i.test(ua))
        browser = 'opera';
    else if (/chrome|crios/i.test(ua))
        browser = 'chrome';
    else if (/safari/i.test(ua))
        browser = 'safari';
    else if (/firefox|fxios/i.test(ua))
        browser = 'firefox';
    // Device Type Detection
    const isIpad = /ipad/i.test(ua) || (os === 'ios' && maxTouchPoints > 1);
    const isTablet = isIpad || /(tablet|playbook|silk)|(android(?!.*mobi))/i.test(ua);
    const isMobile = /mobi|ipod|phone|blackberry|opera mini|fennec/i.test(ua) || (os === 'ios' && !isTablet);
    const isDesktop = !isMobile && !isTablet;
    const isTouchDevice = maxTouchPoints > 0 || ('ontouchstart' in window);
    cachedDeviceContext = {
        isMobile,
        isTablet,
        isDesktop,
        isTouchDevice,
        browser,
        os
    };
    return cachedDeviceContext;
}
export const lllDevice = {
    get isMobile() { return getDeviceContext().isMobile; },
    get isTablet() { return getDeviceContext().isTablet; },
    get isDesktop() { return getDeviceContext().isDesktop; },
    get isTouchDevice() { return getDeviceContext().isTouchDevice; },
    get browser() { return getDeviceContext().browser; },
    get os() { return getDeviceContext().os; },
    // Real-time checks
    get isDarkMode() {
        if (!isBrowser || !window.matchMedia)
            return false;
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    },
    get orientation() {
        if (!isBrowser)
            return 'unknown';
        return window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
    }
};
export default lllDevice;
