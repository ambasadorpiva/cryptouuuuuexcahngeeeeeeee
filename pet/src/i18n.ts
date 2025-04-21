import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      navigation: {
        connectWallet: "Link Wallet",
        supportCenter: "Help Center",
        legalDocuments: "Legal Information",
        contactTeam: "Reach Our Team",
        aboutPlatform: "Platform Overview",
        howItFunctions: "Platform Guide",
        termsConditions: "Terms & Conditions",
        privacyStatement: "Privacy Notice",
        compliancePolicies: "Compliance Guidelines",
        contactDescription: "Connect with our expert support team",
        aboutDescription: "Explore our platform and mission",
        howItWorksDescription: "Learn our platform essentials",
        termsDescription: "Review our service terms",
        privacyDescription: "Understand data protection practices",
        complianceDescription: "Anti-Money Laundering and Customer Verification Requirements",
        language: {
          russian: "Russian"
        },
        platformName: "Digital Asset Exchange",
      },
      aboutPage: {
        hero: {
          title: "About Our Exchange Platform",
          description: "Welcome to our specialized digital asset exchange platform, focusing exclusively on cryptocurrency swaps. We continuously expand our supported assets while implementing cutting-edge blockchain and Web3 technologies to enhance your trading experience.",
        },
        features: {
          secureTitle: "Enhanced Security",
          secureDesc: "Non-custodial trading platform ensuring maximum protection for every transaction.",
          fastTitle: "Swift Processing",
          fastDesc: "Experience rapid exchanges with most trades completing within 30 minutes.",
          multipleTitle: "Diverse Assets",
          multipleDesc: "Wide range of supported cryptocurrencies including Bitcoin, Ethereum, USDT, and many more.",
        },
        payment: {
          title: "Payment Methods",
          description: "Choose from our selection of secure payment options.",
        },
        cta: {
          title: "Start Your Trading Journey",
          description: "Join our community of satisfied traders who trust us with their digital asset exchanges.",
          button: "Begin Trading",
        },
      },
      contact: {
        heroTitle: "Expert Support Available",
        bullet1: "Custom financial automation solutions",
        bullet2: "Dedicated implementation support",
        bullet3: "Volume-based pricing benefits",
        form: {
          name: "Name *",
          email: "Email *",
          message: "Message *",
          namePlaceholder: "Your name",
          emailPlaceholder: "you@company.com",
          messagePlaceholder: "Share your requirements...",
          send: "Submit Message",
        },
        helpTitle: "Need assistance? We're here to help.",
        helpDescription: "Multiple support channels available for your convenience.",
        emailSupportTitle: "Email Support",
        emailSupportText: "Send inquiries anytime.",
        scheduleCallTitle: "Book Consultation",
        scheduleCallText: "Schedule with our experts.",
      },
      how: {
        nav: {
          convert: "Exchange"
        },
        steps: {
          1: {
            title: "Select Assets",
            description: "Choose your exchange pairs."
          },
          2: {
            title: "Provide Wallet Address",
            description: "Enter your receiving address."
          },
          3: {
            title: "Complete Exchange",
            description: "Send assets to the provided address."
          },
          4: {
            title: "Quick Confirmation",
            description: "Receive confirmation within 12 minutes."
          }
        },
        note: {
          title: "Important",
          text: "Fully automated process."
        },
        cta: "Start Exchange",
        offer: {
          title: "Special ETH/SOL Offer",
          subtitle: "Extra 3% USDT Bonus",
          description: "Limited time: Get 3% bonus USDT when exchanging ETH or SOL."
        },
        features: {
          bestRate: {
            title: "Optimal Rates",
            description: "Best-in-market rates guaranteed."
          },
          fast: {
            title: "Rapid Processing",
            description: "5-minute average completion time."
          },
          care: {
            title: "User-Focused",
            description: "Privacy and asset control prioritized."
          }
        }
      },
      info_banner: {
        title: "Seamless Digital\nAsset Exchange",
        exchangeTitle: "Premium Rates",
        exchangeDescription: "Market-leading exchange rates",
        supportTitle: "Always Available",
        supportDescription: "24/7 expert assistance",
        securityTitle: "Maximum Security",
        securityDescription: "Advanced protection systems",
      },
      top_pairs: {
        title: "Popular Trading Pairs",
        subtitle: "Additional Exchange Options",
        convertTab: "Exchange",
      },
      convertor: {
        youPay: "Send Amount",
        receive: "Receive Amount",
        amount: "Quantity",
        address: "Destination Address",
        walletDetails: "Wallet Info",
        back: "Previous",
        next: "Continue",
        currency: "Asset",
        title: "Asset Exchange",
        youReceive: "You Get",
        proceed: "Continue",
      },
      currency_menu: {
        selectCurrency: "Choose Asset",
        search: "Find assets",
      },
      thankYou: {
        orderId: "Exchange ID:",
        copyOrderId: "Copy",
        youNeedToSend: "Send Amount:",
        currency: "Asset",
        youWillReceive: "Receiving:",
        sendFundsToAddress: "Send to Address:",
        amount: "Amount",
        toThisAddress: "Destination",
        yourWalletAddress: "Your Address",
        copyAddress: "Copy",
        steps: {
          awaitingDeposit: "Awaiting Funds",
          awaitingConfirmations: "Confirming",
          exchanging: "Processing",
          sendingToYou: "Transferring",
          done: "Complete"
        }
      },
      reviews: {
        title: "User Experiences",
        testimonials: [
          {
            name: "Michael Johnson",
            role: "User",
            content: "Seamless exchange process. Quick and reliable."
          },
          {
            name: "Emma Williams",
            role: "User",
            content: "Best rates and instant processing. Highly recommended!"
          },
          {
            name: "Daniel Brown",
            role: "User",
            content: "Top exchange platform. Transparent and secure."
          },
          {
            name: "Sophia Davis",
            role: "User",
            content: "Excellent support team. Quick issue resolution."
          },
          {
            name: "James Wilson",
            role: "User",
            content: "Smooth experience. Will use again."
          }
        ]
      },
      footer: {
        stayUpdated: "Latest Updates",
        subscribe: "Subscribe for crypto news and updates.",
        enterEmail: "Email address",
        companyInfo: {
          title: "Digital Exchange",
          email: "support@exchange.io",
          phone: "+1 (555) 123-4567",
          address: "New York, NY"
        },
        popularPairs: "Top Pairs",
        quickLinks: "Quick Access",
        legal: "Legal",
        quickLinksItems: {
          aboutUs: "About",
          howItWorks: "Guide",
          contactSupport: "Support"
        },
        legalItems: {
          privacyPolicy: "Privacy",
          termsOfService: "Terms",
          amlPolicy: "AML Policy"
        },
        stayWithUs: "Connect",
        copyright: "© 2025 Digital Exchange. All rights reserved."
      },
      contactUs: {
        title: "Get in Touch",
        description: "Expert support for your needs.",
        buttonText: "Start Now!"
      },
      howItWorks: {
        title: "Exchange Guide",
        description: "Simple step-by-step process.",
        steps: {
          consultation: {
            title: "Initial Chat",
            description: "Connect with experts"
          },
          solution: {
            title: "Custom Solution",
            description: "Tailored to your needs"
          }
        },
        seeMore: "Learn More"
      }
    }
  },
  ru: {
    translation: {
      navigation: {
        connectWallet: "Подключить кошелёк",
        supportCenter: "Центр помощи",
        legalDocuments: "Правовая информация",
        contactTeam: "Связаться с командой",
        aboutPlatform: "О платформе",
        howItFunctions: "Руководство",
        termsConditions: "Условия использования",
        privacyStatement: "Конфиденциальность",
        compliancePolicies: "Соответствие требованиям",
        contactDescription: "Поддержка пользователей",
        aboutDescription: "Узнайте о нашей платформе",
        howItWorksDescription: "Основы работы",
        termsDescription: "Условия сервиса",
        privacyDescription: "Защита данных",
        complianceDescription: "Требования AML и KYC",
        language: {
          russian: "Русский"
        },
        platformName: "Криптобиржа",
      },
      aboutPage: {
        hero: {
          title: "О нашей платформе",
          description: "Добро пожаловать на нашу специализированную платформу обмена цифровых активов. Мы постоянно расширяем список поддерживаемых активов и внедряем передовые технологии блокчейна и Web3.",
        },
        features: {
          secureTitle: "Безопасность",
          secureDesc: "Некастодиальная платформа для максимальной защиты сделок.",
          fastTitle: "Быстрые обмены",
          fastDesc: "Большинство обменов завершается за 30 минут.",
          multipleTitle: "Разные активы",
          multipleDesc: "Поддержка множества криптовалют: Bitcoin, Ethereum, USDT и других.",
        },
        payment: {
          title: "Способы оплаты",
          description: "Выберите удобный способ оплаты.",
        },
        cta: {
          title: "Начните торговлю",
          description: "Присоединяйтесь к сообществу довольных трейдеров.",
          button: "Начать обмен",
        },
      },
      contact: {
        heroTitle: "Экспертная поддержка",
        bullet1: "Индивидуальные решения",
        bullet2: "Помощь во внедрении",
        bullet3: "Выгодные условия",
        form: {
          name: "Имя *",
          email: "Email *",
          message: "Сообщение *",
          namePlaceholder: "Ваше имя",
          emailPlaceholder: "you@company.com",
          messagePlaceholder: "Опишите запрос...",
          send: "Отправить",
        },
        helpTitle: "Нужна помощь?",
        helpDescription: "Выберите удобный способ связи.",
        emailSupportTitle: "Email поддержка",
        emailSupportText: "Отправьте запрос.",
        scheduleCallTitle: "Консультация",
        scheduleCallText: "Запись на звонок.",
      },
      how: {
        nav: {
          convert: "Обмен"
        },
        steps: {
          1: {
            title: "Выбор активов",
            description: "Выберите пару для обмена."
          },
          2: {
            title: "Адрес кошелька",
            description: "Укажите адрес получения."
          },
          3: {
            title: "Завершение обмена",
            description: "Отправьте активы."
          },
          4: {
            title: "Подтверждение",
            description: "Получите уведомление."
          }
        },
        note: {
          title: "Важно",
          text: "Автоматический процесс."
        },
        cta: "Начать обмен",
        offer: {
          title: "Акция ETH/SOL",
          subtitle: "Бонус 3% USDT",
          description: "Ограниченное время: +3% при обмене ETH или SOL."
        },
        features: {
          bestRate: {
            title: "Лучшие курсы",
            description: "Гарантия выгодных условий."
          },
          fast: {
            title: "Быстро",
            description: "Среднее время - 5 минут."
          },
          care: {
            title: "Для пользователей",
            description: "Приватность и контроль."
          }
        }
      },
      info_banner: {
        title: "Удобный обмен\nцифровых активов",
        exchangeTitle: "Выгодные курсы",
        exchangeDescription: "Лучшие на рынке",
        supportTitle: "Всегда на связи",
        supportDescription: "Поддержка 24/7",
        securityTitle: "Безопасность",
        securityDescription: "Надёжная защита",
      },
      top_pairs: {
        title: "Популярные пары",
        subtitle: "Варианты обмена",
        convertTab: "Обменять",
      },
      convertor: {
        youPay: "Отправляете",
        receive: "Получаете",
        amount: "Сумма",
        address: "Адрес получения",
        walletDetails: "Информация",
        back: "Назад",
        next: "Далее",
        currency: "Актив",
        title: "Обмен активов",
        youReceive: "Получите",
        proceed: "Продолжить",
      },
      currency_menu: {
        selectCurrency: "Выбор актива",
        search: "Поиск активов",
      },
      thankYou: {
        orderId: "ID обмена:",
        copyOrderId: "Копировать",
        youNeedToSend: "К отправке:",
        currency: "Актив",
        youWillReceive: "Получение:",
        sendFundsToAddress: "Адрес отправки:",
        amount: "Сумма",
        toThisAddress: "Получатель",
        yourWalletAddress: "Ваш адрес",
        copyAddress: "Копировать",
        steps: {
          awaitingDeposit: "Ожидание средств",
          awaitingConfirmations: "Подтверждение",
          exchanging: "Обработка",
          sendingToYou: "Перевод",
          done: "Завершено"
        }
      },
      reviews: {
        title: "Отзывы пользователей",
        testimonials: [
          {
            name: "Михаил Иванов",
            role: "Пользователь",
            content: "Удобный обмен. Быстро и надёжно."
          },
          {
            name: "Елена Петрова",
            role: "Пользователь",
            content: "Отличные курсы и мгновенная обработка. Рекомендую!"
          },
          {
            name: "Дмитрий Смирнов",
            role: "Пользователь",
            content: "Лучшая платформа. Прозрачно и безопасно."
          },
          {
            name: "София Козлова",
            role: "Пользователь",
            content: "Отличная поддержка. Быстрое решение вопросов."
          },
          {
            name: "Игорь Морозов",
            role: "Пользователь",
            content: "Всё отлично. Буду пользоваться снова."
          }
        ]
      },
      footer: {
        stayUpdated: "Новости",
        subscribe: "Подписка на обновления.",
        enterEmail: "Email адрес",
        companyInfo: {
          title: "Криптобиржа",
          email: "support@exchange.io",
          phone: "+1 (555) 123-4567",
          address: "Нью-Йорк, NY"
        },
        popularPairs: "Популярные пары",
        quickLinks: "Быстрый доступ",
        legal: "Документы",
        quickLinksItems: {
          aboutUs: "О нас",
          howItWorks: "Инструкция",
          contactSupport: "Поддержка"
        },
        legalItems: {
          privacyPolicy: "Приватность",
          termsOfService: "Условия",
          amlPolicy: "AML"
        },
        stayWithUs: "Связь",
        copyright: "© 2025 Криптобиржа. Все права защищены."
      },
      contactUs: {
        title: "Связаться",
        description: "Экспертная поддержка.",
        buttonText: "Начать!"
      },
      howItWorks: {
        title: "Инструкция",
        description: "Простой процесс.",
        steps: {
          consultation: {
            title: "Консультация",
            description: "Общение с экспертами"
          },
          solution: {
            title: "Решение",
            description: "Под ваши задачи"
          }
        },
        seeMore: "Подробнее"
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  supportedLngs: ["en", "ru"],
  debug: false,
  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"],
  },
  pluralSeparator: "_",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;