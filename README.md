# Flextudio

React와 TypeScript로 구현된 미니 플렉스튜디오입니다.

## 🚀 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 📁 프로젝트 구조

```
src/
├── components/          # UI 컴포넌트
│   ├── settings
│   │   ├── GroupSettings.tsx    # 그룹 설정
│   │   ├── InputSettings.tsx    # 인풋 설정
│   │   ├── TextSettings.tsx     # 텍스트 설정
│   ├── ElementRenderer.tsx    # 요소 렌더링
│   ├── Header.tsx      # 상단 툴바
│   ├── Preview.tsx     # 미리보기 영역
│   ├── Settings.tsx    # 설정 영역
├── hooks/              # Custom Hooks
│   ├── useElements.ts
│   └── useSelectedElement.ts
├── stores/             # Zustand 스토어
│   └── elementStore.ts
├── types/              # TypeScript 타입
│   └── elements.ts
├── utils/              # 유틸리티 함수
│   └── elementUtils.ts
└── App.tsx            # 메인 앱 컴포넌트
```

## 🔧 아키텍처 설계

### 자료구조 설계

이 프로젝트에서는 **중첩 배열 대신 `parentId`를 사용한 평면 구조**를 채택했습니다.

#### 예시:

```ts
[
  { id: "1", type: "group", parentId: null },
  { id: "2", type: "text", parentId: "1" },
  { id: "3", type: "input", parentId: "1" }
]

#### 장점

- **단순한 데이터 구조**: 모든 요소가 평면 배열에 저장
- **효율적인 검색**: O(n) 시간으로 부모/자식 관계 탐색
- **쉬운 조작**: 요소 이동 시 `parentId`만 변경
- **메모리 효율성**: 중복 참조 없이 단일 저장
- **확장성**: 새로운 관계 타입 추가 용이

### 성능 최적화

- **React.memo**: 각 요소 컴포넌트가 자신과 관련된 prop이 바뀔 때만 렌더링
- **Zustand (with shallow)**: 필요한 state만 구독하여 최소한의 렌더링 유발
- **컴포넌트 분리**: 관심사 분리를 통한 최적화

### 코드 품질

- **TypeScript**: 타입 안정성 보장
- **ESLint**: 코드 품질 및 일관성 유지
- **모듈화**: 기능별 파일 분리
- **Custom Hooks**: 로직 재사용성 향상
```

```

```
