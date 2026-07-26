# lll-device 📱
- [Github](https://github.com/lll-studio/llldevice)
- [npm](https://npmjs.org/package/llldevice)

> An enterprise-grade, zero-dependency device and browser detection utility. Optimized for SSR environments with built-in memoization for maximum performance.
> 엔터프라이즈급 제로 디펜던시 기기 및 브라우저 환경 판별 유틸리티입니다. 완벽한 SSR 지원과 메모이제이션(캐싱)을 통해 성능을 극대화했습니다.

## 🚀 Installation (설치)

```bash
npm install llldevice
```

## 💻 Usage (사용법)
```javascript
import { lllDevice } from 'lll-device';

// 📱 Device Types (기기 타입 판별)
console.log(lllDevice.isMobile);       // boolean (스마트폰 여부)
console.log(lllDevice.isTablet);       // boolean (태블릿 여부)
console.log(lllDevice.isDesktop);      // boolean (데스크톱 여부)
console.log(lllDevice.isTouchDevice);  // boolean (터치 지원 여부)

// 🌐 Environment (환경 판별)
console.log(lllDevice.browser);        // 'chrome' | 'safari' | 'whale' | 'edge' | etc.
console.log(lllDevice.os);             // 'ios' | 'android' | 'macos' | 'windows' | etc.

// ⚡ Real-time Context (실시간 상태)
console.log(lllDevice.isDarkMode);     // boolean (시스템 다크모드 활성화 여부)
console.log(lllDevice.orientation);    // 'portrait' | 'landscape' (화면 방향)
```

## ✨ Key Features (주요 기능)
- **⚡ Performance First (압도적 성능)**
 - 🇺🇸 Parses `userAgent` only once and caches the result to prevent frame drops.
 - 🇰🇷 무거운 정규식 파싱을 최초 1회만 수행하고 결과를 캐싱하여 렌더링 성능 저하를 완벽히 차단합니다.
- **🛡️ SSR Safe (안전한 서버 사이드 렌더링)**
 - 🇺🇸 Flawless execution in Node.js environments (Next.js, Nuxt) without `window is not defined` errors.
 - 🇰🇷 Next.js 등 서버 환경에서 실행 시 에러 없이 안전한 기본값을 반환하도록 설계되었습니다.
- **🍏 iPadOS 13+ Fixed (최신 아이패드 완벽 식별)**
 - 🇺🇸 Accurately detects iPads even when Safari requests desktop sites (spoofing as Mac).
 - 🇰🇷 데스크톱 모드로 동작하여 Mac으로 위장하는 최신 아이패드(iPadOS 13 이상)를 정확히 태블릿으로 잡아냅니다.
- 🏷️ Type-Safe (완벽한 타입스크립트 지원)
 - 🇺🇸 Written with strict TypeScript definitions for best developer experience.
 - 🇰🇷 엄격한 타입 정의 파일이 포함되어 있어, IDE에서 완벽한 자동완성과 타입 추론을 제공받을 수 있습니다.

## 📄 License
MIT