export interface Post {
  title: string;
  excerpt: string;
  category: string;
  href: string;
  date: string;
}

export const posts: Post[] = [
  {
    title: '5. Pretraining on Unlabeled Data (Part 02)',
    excerpt:
      'Vòng lặp huấn luyện LLM, temperature scaling, và các chiến lược decoding: top-k, top-p sampling.',
    category: 'LLM',
    href: '/docs/build-llm-from-scratch/pretrain-unlabeled-data-02',
    date: '2026-08-18',
  },
  {
    title: '5. Pretraining on Unlabeled Data (Part 01)',
    excerpt:
      'Quy trình pretraining LLM trên dữ liệu chưa gán nhãn, từ tính loss đến vòng lặp huấn luyện.',
    category: 'LLM',
    href: '/docs/build-llm-from-scratch/pretrain-unlabeled-data-01',
    date: '2026-05-31',
  },
  {
    title: '4. LLM Architecture (Part 02)',
    excerpt:
      'Triển khai transformer block, feed-forward network và GELU activation cho GPT.',
    category: 'LLM',
    href: '/docs/build-llm-from-scratch/llm-architecture-02',
    date: '2026-01-29',
  },
  {
    title: 'OS',
    excerpt: 'Phân biệt Sequential, Concurrency & Parallelism, Thread & Process.',
    category: 'Interview',
    href: '/docs/interviews/os',
    date: '2025-12-17',
  },
  {
    title: '4. LLM Architecture (Part 01)',
    excerpt:
      'Kiến trúc tổng quan của GPT qua DummyGPTModel và các thành phần cốt lõi.',
    category: 'LLM',
    href: '/docs/build-llm-from-scratch/llm-architecture-01',
    date: '2025-12-24',
  },
  {
    title: 'Probability & Statistics (Xác suất thống kê)',
    excerpt: 'Ghi chú các khái niệm xác suất thống kê nền tảng cho machine learning.',
    category: 'ML',
    href: '/docs/machine-learning/base-math/probability-statistics',
    date: '2025-12-24',
  },
  {
    title: '3. Coding Attention Mechanisms (Part 04)',
    excerpt:
      'Biến đổi self-attention tiêu chuẩn thành causal attention - thành phần cốt lõi của Transformer.',
    category: 'LLM',
    href: '/docs/build-llm-from-scratch/attention-mechanisms-04',
    date: '2025-12-17',
  },
  {
    title: '3. Coding Attention Mechanisms (Part 05)',
    excerpt: 'Mở rộng multi-head attention từ causal attention.',
    category: 'LLM',
    href: '/docs/build-llm-from-scratch/attention-mechanisms-05',
    date: '2025-12-17',
  },
  {
    title: '3. Coding Attention Mechanisms (Part 01)',
    excerpt: 'Bốn biến thể của attention mechanism và lý do vì sao cần đến chúng.',
    category: 'LLM',
    href: '/docs/build-llm-from-scratch/attention-mechanisms-01',
    date: '2025-10-07',
  },
  {
    title: '3. Coding Attention Mechanisms (Part 02)',
    excerpt:
      '"Self" trong self-attention nghĩa là gì và cách tính attention scores không có trọng số huấn luyện.',
    category: 'LLM',
    href: '/docs/build-llm-from-scratch/attention-mechanisms-02',
    date: '2025-10-07',
  },
  {
    title: '3. Coding Attention Mechanisms (Part 03)',
    excerpt:
      'Thêm trainable weight matrices được cập nhật trong quá trình huấn luyện vào self-attention.',
    category: 'LLM',
    href: '/docs/build-llm-from-scratch/attention-mechanisms-03',
    date: '2025-10-07',
  },
  {
    title: '2. Data Preparation and Sampling',
    excerpt:
      'Biểu diễn văn bản thành vector: tokenization, embedding và sliding window sampling.',
    category: 'LLM',
    href: '/docs/build-llm-from-scratch/data-preparation-and-sampling',
    date: '2025-10-01',
  },
  {
    title: '1. State of building LLMs',
    excerpt: 'Tổng quan hai giai đoạn xây dựng LLM: pretraining và finetuning.',
    category: 'LLM',
    href: '/docs/build-llm-from-scratch/state-of-building-LLMs',
    date: '2025-10-01',
  },
  {
    title: 'OOP',
    excerpt: '4 tính chất của OOP và nguyên lý SOLID.',
    category: 'Interview',
    href: '/docs/interviews/oop',
    date: '2025-01-13',
  },
  {
    title: 'Database',
    excerpt: 'UUID, transaction, SQL vs NoSQL, đánh index, sharding.',
    category: 'Interview',
    href: '/docs/interviews/database',
    date: '2025-01-13',
  },
  {
    title: '.NET',
    excerpt: 'Phân biệt .NET Core và .NET Framework.',
    category: 'Interview',
    href: '/docs/interviews/dotnet',
    date: '2025-01-13',
  },
  {
    title: 'Network',
    excerpt: '7 tầng mô hình OSI, SSL/TLS, HTTP vs HTTPS, TCP/UDP, Socket & WebSocket.',
    category: 'Interview',
    href: '/docs/interviews/network',
    date: '2025-01-13',
  },
  {
    title: 'Web',
    excerpt:
      'Session & Cookies, Local Storage & Session Storage, quản lý phiên làm việc ở server.',
    category: 'Interview',
    href: '/docs/interviews/web',
    date: '2025-01-13',
  },
  {
    title: 'C#',
    excerpt: 'Object & Class, Struct & Class, Property & Field, Abstract Class & Interface.',
    category: 'Interview',
    href: '/docs/interviews/csharp',
    date: '2025-01-13',
  },
];
