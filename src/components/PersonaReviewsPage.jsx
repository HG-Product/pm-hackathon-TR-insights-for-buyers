import { useEffect } from 'react'
import Header from './Header'
import './PersonaReviewsPage.css'

// Full review data for each persona
const personaReviewsData = {
  "IT Directors": {
    title: "IT Directors",
    totalReviews: 356,
    avgRating: 8.8,
    hgData: {
      installations: "735K",
      topIndustries: ["Technology", "Professional Services", "Healthcare"],
      avgCompanySize: "500+ employees"
    },
    communityInsights: {
      pros: [
        "Comprehensive Administration Tools: IT Directors praise the global admin capabilities, allowing seamless management of users, settings, and permissions across the organization.",
        "Enterprise-Grade Security: Encryption of all data transfers and robust user authentication features meet stringent IT security requirements.",
        "Reliable Infrastructure: Consistent uptime and performance across different devices and network conditions reduces support tickets."
      ],
      cons: [
        "Pricing Concerns: Some IT Directors note that enterprise pricing can be complex with various add-ons and feature tiers.",
        "Advanced Feature Learning Curve: While basic features are intuitive, some advanced administrative functions require training.",
        "Integration Complexity: Setting up SSO and advanced integrations with existing IT infrastructure can be time-consuming."
      ]
    },
    reviews: [
      {
        id: 1,
        title: "Zoom Workplace - A Cornerstone for IT Infrastructure",
        rating: 10,
        date: "October 22, 2025",
        reviewer: {
          name: "Keith Phillips",
          role: "Director, Information Technology",
          company: "Bush Ross P.A.",
          size: "51-200 employees",
          verified: true
        },
        useCase: "We moved to a whole Zoom solution, from our telephones to video conferencing. As the IT Director, I needed a solution that would be reliable, secure, and easy to manage across our entire firm. Zoom Workplace has delivered on all fronts.",
        pros: [
          "Links to my calendar for meetings seamlessly",
          "Makes the need to have a physical phone a thing of the past",
          "Global administration tools make user management simple",
          "Integration with our existing SSO and directory services"
        ],
        cons: [
          "Support could be improved with dedicated account management",
          "Some advanced features require additional licensing"
        ],
        recommendation: "It just works for all areas of our firm. No major issues. For IT Directors looking for a comprehensive UCaaS solution, Zoom Workplace delivers reliability and ease of management.",
        experience: "3 years of experience"
      },
      {
        id: 2,
        title: "Robust Platform with Excellent Admin Capabilities",
        rating: 9,
        date: "October 20, 2025",
        reviewer: {
          name: "Verified User",
          role: "IT Director",
          company: "Technology Company",
          size: "201-500 employees",
          verified: true
        },
        useCase: "As IT Director, I manage Zoom Workplace for 300+ users across multiple offices. The platform needs to be secure, reliable, and easy to administer. Zoom has been our primary communication platform for 4 years.",
        pros: [
          "Comprehensive admin dashboard with detailed analytics",
          "User provisioning through AD/Azure AD integration",
          "Excellent uptime and reliability (99.9%+ in our experience)",
          "Security features meet our compliance requirements"
        ],
        cons: [
          "Pricing structure can be complex with multiple tiers",
          "Would like more granular control over some features",
          "Recording storage limits require careful management"
        ],
        recommendation: "Zoom's engineering team released 300+ new features last year, demonstrating their commitment to innovation. Highly recommended for enterprise IT departments.",
        experience: "4 years of experience"
      },
      {
        id: 3,
        title: "Reliable Solution for Hybrid Workforce",
        rating: 9,
        date: "October 18, 2025",
        reviewer: {
          name: "Verified User",
          role: "Director of IT Operations",
          company: "Financial Services",
          size: "501-1000 employees",
          verified: true
        },
        useCase: "Managing communication infrastructure for a hybrid workforce of 700+ employees. Zoom Workplace serves as our primary platform for meetings, phone system, and team collaboration.",
        pros: [
          "Zoom Rooms integration works seamlessly with our conference room hardware",
          "Mobile apps provide consistent experience for remote workers",
          "API allows us to integrate with our internal systems",
          "Detailed reporting helps track usage and ROI"
        ],
        cons: [
          "Initial setup of Zoom Phone required significant planning",
          "Some users find the multiple Zoom apps confusing",
          "Would like better integration with ServiceNow"
        ],
        recommendation: "For IT Directors managing hybrid or remote workforces, Zoom Workplace provides the reliability and features needed. The admin tools are comprehensive and the platform is stable.",
        experience: "2 years of experience"
      },
      {
        id: 4,
        title: "Enterprise-Grade Communication Platform",
        rating: 10,
        date: "October 15, 2025",
        reviewer: {
          name: "Verified User",
          role: "VP of IT",
          company: "Healthcare Organization",
          size: "1000+ employees",
          verified: true
        },
        useCase: "Deployed Zoom Workplace across 1,200+ users in a healthcare setting where HIPAA compliance and security are critical. Use it for telehealth, internal meetings, and staff communication.",
        pros: [
          "HIPAA compliance features meet our regulatory requirements",
          "Encryption and security controls are enterprise-grade",
          "Zoom Healthcare API enables integration with our EMR",
          "Excellent support through our dedicated account team"
        ],
        cons: [
          "Enterprise pricing is significant investment",
          "Training materials could be more comprehensive for healthcare-specific features"
        ],
        recommendation: "For enterprise IT leaders, especially in regulated industries, Zoom Workplace delivers the security, compliance, and reliability required. Worth the investment.",
        experience: "5 years of experience"
      }
    ]
  },
  "CTO/VP of ITs": {
    title: "CTO/VP of IT",
    totalReviews: 285,
    avgRating: 8.9,
    hgData: {
      installations: "588K",
      topIndustries: ["Financial Services", "Technology", "Enterprise"],
      avgCompanySize: "1000+ employees"
    },
    communityInsights: {
      pros: [
        "Strategic Platform Vision: CTOs appreciate Zoom's investment in AI and innovation, with 300+ features released annually.",
        "Enterprise Scalability: Platform scales from small teams to 1,000+ participant webinars without performance degradation.",
        "Security & Compliance: End-to-end encryption, SSO, and compliance certifications (HIPAA, SOC 2, GDPR) meet enterprise requirements."
      ],
      cons: [
        "Integration Ecosystem: While improving, some CTOs note that third-party integration marketplace could be more robust.",
        "Customization Limitations: Some enterprise-specific customizations require vendor involvement.",
        "Multi-Region Deployment: Complex deployments across multiple regions can require careful planning."
      ]
    },
    reviews: [
      {
        id: 1,
        title: "Strategic Platform for Digital Transformation",
        rating: 9,
        date: "October 21, 2025",
        reviewer: {
          name: "Verified User",
          role: "CTO",
          company: "Financial Services Firm",
          size: "1000+ employees",
          verified: true
        },
        useCase: "Leading digital transformation initiative for our organization. Zoom Workplace serves as our primary unified communications platform, replacing legacy systems and enabling hybrid work at scale.",
        pros: [
          "Platform roadmap shows strong innovation trajectory",
          "AI Companion features are genuinely useful and differentiated",
          "API and developer tools enable custom integrations",
          "Security architecture meets our stringent requirements"
        ],
        cons: [
          "Some enterprise features require add-on licensing",
          "Would like more control over data residency options",
          "Developer documentation could be more comprehensive"
        ],
        recommendation: "Zoom Workplace is very user friendly and offers a lot of customization in settings. From a technology leadership perspective, it's a solid strategic choice for enterprise communications.",
        experience: "3 years of experience"
      },
      {
        id: 2,
        title: "Excellent Platform for Enterprise Scale",
        rating: 9,
        date: "October 19, 2025",
        reviewer: {
          name: "Verified User",
          role: "VP of IT",
          company: "Technology Company",
          size: "501-1000 employees",
          verified: true
        },
        useCase: "Zoom Workplace provides the ultimate unified communication platform for our distributed engineering teams. We use meetings, team chat, phone, and Zoom Rooms extensively.",
        pros: [
          "Platform scales effortlessly as we grow",
          "Everything is organized well in settings so that it's easy to find",
          "Superior audio quality ensuring clear communication",
          "Zoom's continued investment in innovation is evident"
        ],
        cons: [
          "Enterprise contracts can be complex to navigate",
          "Some advanced features have learning curve for end users"
        ],
        recommendation: "For technology leaders, Zoom Workplace delivers on its promise of unified communications. The platform is mature, feature-rich, and continues to evolve.",
        experience: "4 years of experience"
      },
      {
        id: 3,
        title: "Secure and Reliable for Regulated Industry",
        rating: 9,
        date: "October 17, 2025",
        reviewer: {
          name: "Verified User",
          role: "VP of Information Security",
          company: "Healthcare Organization",
          size: "1000+ employees",
          verified: true
        },
        useCase: "Selected Zoom Workplace for our healthcare organization after extensive security and compliance review. Platform must meet HIPAA requirements while providing excellent user experience.",
        pros: [
          "Encryption of all data transfers ensures confidentiality for sensitive meetings",
          "Comprehensive compliance certifications (HIPAA, SOC 2, GDPR)",
          "Security controls are granular and well-documented",
          "Regular security updates and transparent vulnerability disclosure"
        ],
        cons: [
          "Some security features require enterprise tier",
          "Initial security configuration requires expertise"
        ],
        recommendation: "Essential for our security requirements. The platform's versatility in hosting secure video conference calls across various devices is unmatched.",
        experience: "2 years of experience"
      },
      {
        id: 4,
        title: "Innovation Leader in UCaaS Space",
        rating: 10,
        date: "October 14, 2025",
        reviewer: {
          name: "Verified User",
          role: "Chief Technology Officer",
          company: "Enterprise Software Company",
          size: "1000+ employees",
          verified: true
        },
        useCase: "As CTO, I evaluate platforms based on innovation, reliability, and strategic alignment. Zoom Workplace has become critical infrastructure for our remote-first organization.",
        pros: [
          "AI-powered features genuinely improve productivity",
          "Platform API enables custom workflow automation",
          "Consistent performance across global deployment",
          "Vendor demonstrates strong product vision and execution"
        ],
        cons: [
          "Premium features come at premium price",
          "Some AI features still maturing"
        ],
        recommendation: "Zoom's engineering team released 300+ new features last year, demonstrating commitment to innovation. IT Executive teams should seriously consider Zoom for strategic communications platform.",
        experience: "6 years of experience"
      }
    ]
  },
  "Business Owners": {
    title: "Business Owners",
    totalReviews: 224,
    avgRating: 8.6,
    hgData: {
      installations: "462K",
      topIndustries: ["Small Business", "Professional Services", "Consulting"],
      avgCompanySize: "1-200 employees"
    },
    communityInsights: {
      pros: [
        "Cost-Effective Solution: Business owners appreciate the value proposition, with many noting that ROI was immediate and pricing is competitive for small businesses.",
        "Ease of Use: The intuitive interface requires minimal training, allowing small teams to get up and running quickly without dedicated IT support.",
        "Professional Presentation: HD video quality and features like virtual backgrounds help small businesses present professionally to clients and partners."
      ],
      cons: [
        "Feature Complexity: Some business owners find advanced features overwhelming when they only need basic video conferencing.",
        "Support Response Times: Without enterprise support plans, some report slower response times during critical issues.",
        "Storage Limitations: Recording storage limits on lower-tier plans can be restrictive for businesses that need to archive all meetings."
      ]
    },
    reviews: [
      {
        id: 1,
        title: "Perfect Solution for Small Business Growth",
        rating: 9,
        date: "October 21, 2025",
        reviewer: {
          name: "Verified User",
          role: "Business Owner",
          company: "Consulting Firm",
          size: "11-50 employees",
          verified: true
        },
        useCase: "Running a growing consulting firm with remote and hybrid teams. Needed a professional communication platform that wouldn't break the bank but would scale with us.",
        pros: [
          "Easy to use - minimal training needed for my team",
          "Clear pictures and excellent video quality for client meetings",
          "Everything is organized well in settings",
          "Waiting room and permission controls keep meetings secure"
        ],
        cons: [
          "Recording storage fills up quickly",
          "Would like more customization options without enterprise pricing"
        ],
        recommendation: "For small to medium businesses, Zoom offers the perfect balance of features, ease of use, and value. We've been able to present professionally to Fortune 500 clients.",
        experience: "3 years of experience"
      },
      {
        id: 2,
        title: "ROI Was Immediate",
        rating: 8,
        date: "October 19, 2025",
        reviewer: {
          name: "Verified User",
          role: "CEO",
          company: "Technology Startup",
          size: "11-50 employees",
          verified: true
        },
        useCase: "Remote-first startup needed reliable communication tools from day one. Zoom has been our primary platform for internal meetings, client demos, and investor pitches.",
        pros: [
          "Cost-effective for startups with limited budgets",
          "Mobile apps work flawlessly for on-the-go meetings",
          "Screen sharing is smooth and reliable for product demos",
          "Calendar integration saves time on scheduling"
        ],
        cons: [
          "Some advanced features locked behind higher tiers",
          "Initial setup of phone system took longer than expected"
        ],
        recommendation: "As a startup founder, I need tools that just work. Zoom delivers reliability and professionalism at a price point that makes sense for growing companies.",
        experience: "2 years of experience"
      },
      {
        id: 3,
        title: "Client-Facing Excellence",
        rating: 9,
        date: "October 16, 2025",
        reviewer: {
          name: "Verified User",
          role: "Managing Partner",
          company: "Law Firm",
          size: "51-200 employees",
          verified: true
        },
        useCase: "As a law firm, we need secure, reliable, and professional video conferencing for client consultations, depositions, and internal meetings. Security and presentation are paramount.",
        pros: [
          "Waiting room and security controls protect client confidentiality",
          "Professional appearance with HD video and virtual backgrounds",
          "Recording capability important for legal documentation",
          "Reliable - rarely experience technical issues during important calls"
        ],
        cons: [
          "Would like more granular control over recording permissions",
          "HIPAA/legal-specific features require enterprise tier"
        ],
        recommendation: "For professional services firms, Zoom provides the security and reliability needed for client-facing work. The professional presentation builds client confidence.",
        experience: "4 years of experience"
      }
    ]
  },
  "Department Managers": {
    title: "Department Managers",
    totalReviews: 152,
    avgRating: 8.4,
    hgData: {
      installations: "315K",
      topIndustries: ["Education", "Healthcare", "Retail"],
      avgCompanySize: "100-500 employees"
    },
    communityInsights: {
      pros: [
        "Team Collaboration Tools: Managers value breakout rooms, polling, and whiteboard features for facilitating team meetings and training sessions.",
        "Scheduling Simplicity: Calendar integration and scheduling links simplify coordination across departments and time zones.",
        "Recording for Training: The ability to record and share sessions is particularly valuable for training, onboarding, and asynchronous communication."
      ],
      cons: [
        "Limited Department Controls: Some managers want more granular controls specific to their department without involving IT.",
        "Report Limitations: Department-level usage reporting could be more detailed for tracking team engagement.",
        "Breakout Room Management: Managing multiple breakout rooms simultaneously can be challenging in large training sessions."
      ]
    },
    reviews: [
      {
        id: 1,
        title: "Essential for Department Leadership",
        rating: 8,
        date: "October 20, 2025",
        reviewer: {
          name: "Verified User",
          role: "Department Manager",
          company: "Healthcare Organization",
          size: "501-1000 employees",
          verified: true
        },
        useCase: "Managing a department of 45 people across two locations. Use Zoom for team meetings, one-on-ones, training sessions, and coordination with other departments.",
        pros: [
          "Breakout rooms are perfect for team exercises and sub-group discussions",
          "Recording feature helps team members who can't attend live",
          "Screen sharing makes training and presentations effective",
          "Calendar integration keeps everyone on the same page"
        ],
        cons: [
          "Managing multiple breakout rooms can be hectic",
          "Would like more detailed attendance and engagement reports",
          "Sometimes hard to get IT support for department-specific needs"
        ],
        recommendation: "For department managers, Zoom provides the tools needed to keep distributed teams connected and productive. The collaboration features are particularly strong.",
        experience: "3 years of experience"
      },
      {
        id: 2,
        title: "Great for Hybrid Team Management",
        rating: 9,
        date: "October 18, 2025",
        reviewer: {
          name: "Verified User",
          role: "Operations Manager",
          company: "Retail Company",
          size: "201-500 employees",
          verified: true
        },
        useCase: "Leading operations across 5 retail locations with a mix of in-office and remote team members. Zoom keeps everyone connected for daily standups, weekly planning, and training.",
        pros: [
          "Easy to set up recurring meetings for regular touchpoints",
          "Mobile app allows store managers to join from anywhere",
          "Polling feature useful for quick team decisions",
          "Reliability builds trust with remote team members"
        ],
        cons: [
          "Not all features available on mobile app",
          "Would like more templates for recurring meeting types"
        ],
        recommendation: "Highly recommended for managers leading hybrid teams. The platform makes remote team members feel just as included as those in the office.",
        experience: "2 years of experience"
      }
    ]
  },
  "Sales & Customer Success": {
    title: "Sales & Customer Success",
    totalReviews: 326,
    avgRating: 8.7,
    hgData: {
      installations: "892K",
      topIndustries: ["Technology", "SaaS", "Professional Services"],
      avgCompanySize: "All sizes"
    },
    communityInsights: {
      pros: [
        "Client Meeting Excellence: Sales and CS teams praise Zoom's reliability for customer-facing meetings, demos, and support sessions where first impressions matter.",
        "Screen Sharing for Demos: Seamless screen sharing with annotation tools makes product demonstrations professional and interactive.",
        "Recording for Follow-Up: The ability to record demos and calls helps with training new team members and provides reference material for prospects."
      ],
      cons: [
        "CRM Integration Gaps: Some teams note that deeper integration with CRMs like Salesforce and HubSpot would improve workflow.",
        "Meeting Analytics: Sales leaders want more detailed analytics on meeting engagement and attendance for coaching purposes.",
        "Custom Branding Limitations: Advanced branding options require higher-tier plans, important for customer-facing roles."
      ]
    },
    reviews: [
      {
        id: 1,
        title: "Essential Tool for Customer Success",
        rating: 9,
        date: "October 22, 2025",
        reviewer: {
          name: "Verified User",
          role: "Customer Success Manager",
          company: "SaaS Company",
          size: "201-500 employees",
          verified: true
        },
        useCase: "I meet with clients daily as a Customer Success Manager. Zoom is essential for staying in communication with customers, conducting onboarding sessions, and providing support.",
        pros: [
          "Reliability is crucial for client meetings - Zoom rarely lets me down",
          "Easy screen sharing feature makes demos seamless",
          "Recording capability helps with training and documentation",
          "Professional appearance with HD video builds client confidence"
        ],
        cons: [
          "Would like deeper Salesforce integration",
          "Meeting notes and action items not automatically synced to CRM"
        ],
        recommendation: "For customer-facing roles, Zoom's reliability and professional presentation are non-negotiable. It's become an extension of our customer success strategy.",
        experience: "4 years of experience"
      },
      {
        id: 2,
        title: "Perfect for Sales Demos",
        rating: 9,
        date: "October 20, 2025",
        reviewer: {
          name: "Verified User",
          role: "Account Executive",
          company: "Enterprise Software",
          size: "501-1000 employees",
          verified: true
        },
        useCase: "Conducting product demonstrations and sales calls with enterprise prospects. Need a platform that works flawlessly every time because we only get one chance to impress.",
        pros: [
          "Screen sharing quality is excellent for product demos",
          "Annotation tools help highlight key features during demos",
          "Recording feature allows prospects to review demos later",
          "Consistent performance even with large enterprise calls"
        ],
        cons: [
          "HubSpot integration could be more seamless",
          "Custom branding requires Business tier",
          "Analytics on prospect engagement would be valuable"
        ],
        recommendation: "For sales teams, Zoom is the gold standard. When revenue is on the line, you need a platform that works every single time. Zoom delivers.",
        experience: "3 years of experience"
      },
      {
        id: 3,
        title: "Client Communication Made Easy",
        rating: 8,
        date: "October 17, 2025",
        reviewer: {
          name: "Victor Santo",
          role: "Account Manager",
          company: "Technology Services",
          size: "201-500 employees",
          verified: true
        },
        useCase: "Managing a portfolio of 25 enterprise accounts. Zoom is my primary tool for check-ins, QBRs, issue resolution, and building relationships with clients.",
        pros: [
          "Scheduling links make it easy for clients to book time",
          "Mobile app allows me to join calls from anywhere",
          "We are a fully remote company - Zoom helps us connect with customers and vendors",
          "Virtual backgrounds maintain professionalism from any location"
        ],
        cons: [
          "Meeting summaries could be better integrated with account management workflow",
          "Would like automated follow-up email templates"
        ],
        recommendation: "Essential for account management and customer success. The ease of use and reliability make maintaining client relationships much simpler.",
        experience: "5 years of experience"
      }
    ]
  },
  "Executives & Leadership": {
    title: "Executives & Leadership",
    totalReviews: 198,
    avgRating: 8.9,
    hgData: {
      installations: "567K",
      topIndustries: ["Technology", "Financial Services", "Professional Services"],
      avgCompanySize: "500+ employees"
    },
    communityInsights: {
      pros: [
        "Executive Presence: Leaders value the professional HD video quality and features that support executive communications like town halls and board meetings.",
        "Webinar Capabilities: Large-scale webinar features support company-wide communications and external thought leadership events.",
        "Mobile Flexibility: Executives appreciate the ability to join important meetings from anywhere with consistent quality via mobile apps."
      ],
      cons: [
        "Executive Support: Some executives note that white-glove support for C-suite users could be more proactive.",
        "Advanced Webinar Features: Certain enterprise webinar features require add-ons that can be costly.",
        "Integration with Executive Tools: Deeper integration with board management and executive assistant tools would improve workflow."
      ]
    },
    reviews: [
      {
        id: 1,
        title: "Reliable Platform for Executive Communication",
        rating: 9,
        date: "October 21, 2025",
        reviewer: {
          name: "Verified User",
          role: "Chief Executive Officer",
          company: "Technology Company",
          size: "1000+ employees",
          verified: true
        },
        useCase: "Leading a global organization with employees across 15 countries. Use Zoom for board meetings, investor calls, all-hands meetings, and external speaking engagements.",
        pros: [
          "Professional HD quality appropriate for board and investor meetings",
          "Webinar features support company-wide town halls (1000+ attendees)",
          "Mobile app allows me to join critical meetings from anywhere",
          "Reliability - haven't experienced significant issues in 3 years"
        ],
        cons: [
          "Would appreciate dedicated executive support team",
          "Advanced webinar features require add-ons"
        ],
        recommendation: "For executive leaders, Zoom provides the reliability and professional quality needed for high-stakes communications. It's become critical infrastructure for our organization.",
        experience: "3 years of experience"
      },
      {
        id: 2,
        title: "Essential for Distributed Leadership",
        rating: 9,
        date: "October 19, 2025",
        reviewer: {
          name: "Verified User",
          role: "Vice President",
          company: "Financial Services",
          size: "1000+ employees",
          verified: true
        },
        useCase: "Leading a division of 200+ people across multiple offices. Zoom enables regular communication with direct reports, skip-level meetings, and division-wide updates.",
        pros: [
          "Consistent quality for leadership communications",
          "Recording feature allows team members to catch up on important messages",
          "Calendar integration essential for managing executive schedule",
          "Breakout rooms useful for leadership offsites and planning sessions"
        ],
        cons: [
          "Would like more analytics on engagement for large meetings",
          "Integration with executive assistant workflows could be smoother"
        ],
        recommendation: "Highly recommended for senior leaders managing distributed teams. The platform enables authentic connection even when you can't be there in person.",
        experience: "4 years of experience"
      }
    ]
  },
  "Project & Operations Managers": {
    title: "Project & Operations Managers",
    totalReviews: 267,
    avgRating: 8.5,
    hgData: {
      installations: "478K",
      topIndustries: ["Technology", "Consulting", "Manufacturing"],
      avgCompanySize: "200-1000 employees"
    },
    communityInsights: {
      pros: [
        "Project Coordination: PM and ops managers value Zoom for daily standups, sprint planning, and cross-functional coordination with distributed teams.",
        "Recording for Documentation: The ability to record meetings helps maintain project documentation and catch team members up who couldn't attend.",
        "Screen Sharing for Planning: Whiteboard and screen sharing features facilitate collaborative planning and problem-solving sessions."
      ],
      cons: [
        "Project Management Tool Integration: Deeper integration with tools like Jira, Asana, and Monday.com would streamline workflow.",
        "Meeting Action Items: Automatic extraction of action items and assignment to team members would improve meeting follow-through.",
        "Resource Scheduling: Project-specific scheduling and resource allocation features are limited."
      ]
    },
    reviews: [
      {
        id: 1,
        title: "Perfect for Agile Project Management",
        rating: 9,
        date: "October 20, 2025",
        reviewer: {
          name: "Verified User",
          role: "Project Manager",
          company: "Software Development",
          size: "201-500 employees",
          verified: true
        },
        useCase: "Managing 3-4 concurrent software projects with distributed agile teams. Zoom is essential for daily standups, sprint planning, retrospectives, and stakeholder updates.",
        pros: [
          "Recurring meeting feature perfect for daily standups",
          "Record meetings and events feature helps with project documentation",
          "Whiteboard useful for sprint planning and brainstorming",
          "Breakout rooms great for parallel work sessions"
        ],
        cons: [
          "Jira integration could be deeper",
          "Action items from meetings not automatically tracked",
          "Would like project-specific meeting templates"
        ],
        recommendation: "For project managers leading distributed agile teams, Zoom provides the real-time collaboration tools needed to keep projects on track. The reliability is essential.",
        experience: "3 years of experience"
      },
      {
        id: 2,
        title: "Operations Coordination Made Simple",
        rating: 8,
        date: "October 18, 2025",
        reviewer: {
          name: "Verified User",
          role: "Operations Manager",
          company: "Manufacturing",
          size: "501-1000 employees",
          verified: true
        },
        useCase: "Coordinating operations across 3 manufacturing facilities. Use Zoom for daily production meetings, quality reviews, safety briefings, and cross-facility coordination.",
        pros: [
          "Screen sharing helps review production data and quality metrics",
          "Recording important for compliance and training purposes",
          "Mobile app allows facility managers to join from the floor",
          "Reliability critical for time-sensitive operational decisions"
        ],
        cons: [
          "Integration with operations management systems limited",
          "Would like better tools for visual facility tours"
        ],
        recommendation: "For operations managers coordinating across multiple locations, Zoom bridges the distance and enables real-time problem solving. The reliability is crucial for time-sensitive decisions.",
        experience: "2 years of experience"
      },
      {
        id: 3,
        title: "Collaborative Project Planning",
        rating: 9,
        date: "October 15, 2025",
        reviewer: {
          name: "Verified User",
          role: "Program Manager",
          company: "Consulting Firm",
          size: "501-1000 employees",
          verified: true
        },
        useCase: "Leading multiple client engagement teams simultaneously. Zoom enables coordination with both internal teams and external client stakeholders across different organizations.",
        pros: [
          "Interactive screen sharing with annotations enhances collaboration",
          "Client-facing quality builds confidence with external stakeholders",
          "Scheduling features help coordinate across multiple organizations",
          "Waiting room provides control for sensitive client discussions"
        ],
        cons: [
          "Client organizations sometimes have firewall issues",
          "Would like better tools for multi-project portfolio view"
        ],
        recommendation: "Essential for program managers coordinating complex multi-stakeholder initiatives. The professional quality and reliability are non-negotiable when clients are involved.",
        experience: "5 years of experience"
      }
    ]
  },
  "Remote Employees": {
    title: "Remote Employees",
    totalReviews: 234,
    avgRating: 8.6,
    hgData: {
      installations: "1.2M",
      topIndustries: ["Technology", "Professional Services", "All Industries"],
      avgCompanySize: "All sizes"
    },
    communityInsights: {
      pros: [
        "Connection Despite Distance: Remote employees value how Zoom helps them stay connected with teams, reducing isolation and maintaining company culture.",
        "Work from Anywhere: The mobile apps and consistent experience across devices enable true location flexibility.",
        "Virtual Background Features: Customize meeting appearance and maintain privacy when working from home or shared spaces."
      ],
      cons: [
        "Zoom Fatigue: Extended video meetings can be draining for remote workers who rely on the platform all day.",
        "Bandwidth Requirements: Not all remote employees have consistent high-speed internet, causing occasional quality issues.",
        "Always-On Culture: The ease of virtual meetings can sometimes blur work-life boundaries for remote employees."
      ]
    },
    reviews: [
      {
        id: 1,
        title: "Essential for Remote Work Life",
        rating: 8,
        date: "October 22, 2025",
        reviewer: {
          name: "Victor Santo",
          role: "Security Engineer",
          company: "Remote-First Company",
          size: "51-200 employees",
          verified: true
        },
        useCase: "Working remotely full-time for a distributed company. Zoom is my primary connection to colleagues, used for team meetings, one-on-ones, pair programming, and virtual coffee chats.",
        pros: [
          "We are a fully remote company - Zoom helps us connect internally, with customers, and vendors",
          "Video filters/backgrounds work well for maintaining privacy at home",
          "Mobile app for iOS works perfectly - can join from anywhere",
          "Chat feature helps maintain casual connections with remote colleagues"
        ],
        cons: [
          "Video fatigue is real after full days of meetings",
          "Bandwidth issues occasionally when internet is spotty",
          "Battery drain on laptop during long meeting days"
        ],
        recommendation: "For remote employees, Zoom is the lifeline to your team and company culture. Despite occasional fatigue, it's the best tool available for distributed work.",
        experience: "3 years of experience"
      },
      {
        id: 2,
        title: "Flexibility to Work from Anywhere",
        rating: 9,
        date: "October 19, 2025",
        reviewer: {
          name: "Verified User",
          role: "Remote Employee",
          company: "Technology Company",
          size: "201-500 employees",
          verified: true
        },
        useCase: "Digital nomad working while traveling. Need reliable video conferencing that works from different countries, time zones, and varying internet conditions.",
        pros: [
          "Connectivity in meetings is excellent even with network issues - platform adapts quickly",
          "Mobile app allows me to join from anywhere without laptop",
          "Virtual backgrounds maintain professional appearance from any location",
          "Works well across different countries and internet infrastructures"
        ],
        cons: [
          "Data usage can be high when on cellular",
          "Time zone scheduling sometimes confusing"
        ],
        recommendation: "For remote workers and digital nomads, Zoom's reliability across different network conditions and locations is unmatched. It enables true location independence.",
        experience: "2 years of experience"
      },
      {
        id: 3,
        title: "Remote Team Collaboration",
        rating: 9,
        date: "October 17, 2025",
        reviewer: {
          name: "Verified User",
          role: "Field Representative",
          company: "Sales Organization",
          size: "501-1000 employees",
          verified: true
        },
        useCase: "Working remotely in the field, rarely in an office. Need to stay connected with my manager, attend team meetings, and meet with clients all from the road.",
        pros: [
          "Mobile app works flawlessly for joining meetings from anywhere",
          "One-click join makes it easy to attend while on the move",
          "Audio quality is excellent even when video isn't an option",
          "Calendar integration ensures I never miss important team meetings"
        ],
        cons: [
          "Not all features available on mobile app",
          "Would like better offline mode for spotty connectivity"
        ],
        recommendation: "For field employees and remote workers, Zoom provides the connection to your team that makes remote work sustainable. The mobile experience is particularly strong.",
        experience: "4 years of experience"
      }
    ]
  }
}

function PersonaReviewsPage({ personaType }) {
  const persona = personaReviewsData[personaType] || personaReviewsData["IT Directors"]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [personaType])

  return (
    <article className="persona-reviews-page" itemScope itemType="https://schema.org/Review">
      <Header />
      
      <div className="persona-reviews-container">
        <div className="breadcrumb">
          <a href="/">← Back to Overview</a>
        </div>

        <header className="persona-reviews-header">
          <div className="header-content">
            <h1>{persona.title} Reviews of Zoom Workplace</h1>
            <div className="header-meta">
              <div className="rating-display">
                <span className="rating-score">{persona.avgRating}</span>
                <span className="rating-label">out of 10</span>
              </div>
              <div className="review-count">
                <strong>{persona.totalReviews}</strong> reviews from {persona.title}
              </div>
            </div>
          </div>

          <div className="hg-insights-badge">
            <div className="hg-badge-header">
              <span className="hg-icon">📊</span>
              <span>HG Insights Data</span>
            </div>
            <div className="hg-stats-grid">
              <div className="hg-stat-item">
                <strong>{persona.hgData.installations}</strong>
                <span>installations</span>
              </div>
              <div className="hg-stat-item">
                <strong>{persona.hgData.avgCompanySize}</strong>
                <span>avg company size</span>
              </div>
            </div>
            <div className="hg-industries">
              <span className="industries-label">Top Industries:</span>
              {persona.hgData.topIndustries.map((industry, idx) => (
                <span key={idx} className="industry-tag">{industry}</span>
              ))}
            </div>
          </div>
        </header>

        <section className="community-insights-section">
          <h2>Community Insights from {persona.title}</h2>
          <p className="insights-subtitle">
            Sentiment analysis and key themes from TrustRadius reviews combined with HG Insights market intelligence
          </p>

          <div className="insights-grid">
            <div className="insights-column pros-column">
              <h3>Pros</h3>
              <ul className="insights-list">
                {persona.communityInsights.pros.map((pro, idx) => (
                  <li key={idx}>{pro}</li>
                ))}
              </ul>
            </div>

            <div className="insights-column cons-column">
              <h3>Cons</h3>
              <ul className="insights-list">
                {persona.communityInsights.cons.map((con, idx) => (
                  <li key={idx}>{con}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="reviews-list-section">
          <div className="section-header">
            <h2>Reviews</h2>
            <span className="review-count-badge">{persona.reviews.length} Reviews</span>
          </div>

          <div className="reviews-list">
            {persona.reviews.map((review) => (
              <article key={review.id} className="review-card-detail" itemScope itemType="https://schema.org/Review">
                <header className="review-card-header">
                  <div className="review-title-row">
                    <h3 itemProp="name">{review.title}</h3>
                    <div className="review-rating" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                      <span className="rating-value" itemProp="ratingValue">{review.rating}</span>
                      <span className="rating-scale">out of 10</span>
                    </div>
                  </div>
                  <div className="review-meta">
                    <span className="review-date" itemProp="datePublished">{review.date}</span>
                  </div>
                </header>

                <div className="reviewer-info" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <div className="reviewer-avatar">
                    {review.reviewer.name === "Verified User" ? "VU" : review.reviewer.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="reviewer-details">
                    <div className="reviewer-name" itemProp="name">{review.reviewer.name}</div>
                    <div className="reviewer-role">{review.reviewer.role}</div>
                    {review.reviewer.company && (
                      <div className="reviewer-company">
                        {review.reviewer.company} ({review.reviewer.size})
                      </div>
                    )}
                    {review.reviewer.verified && <span className="verified-badge">✓ Vetted Review</span>}
                  </div>
                  <div className="reviewer-experience">{review.experience}</div>
                </div>

                <div className="review-content" itemProp="reviewBody">
                  <div className="review-section">
                    <h4>Use Cases and Deployment Scope</h4>
                    <p>{review.useCase}</p>
                  </div>

                  <div className="review-section">
                    <h4>Pros</h4>
                    <ul className="review-list pros-list">
                      {review.pros.map((pro, idx) => (
                        <li key={idx}>{pro}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="review-section">
                    <h4>Cons</h4>
                    <ul className="review-list cons-list">
                      {review.cons.map((con, idx) => (
                        <li key={idx}>{con}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="review-section">
                    <h4>Likelihood to Recommend</h4>
                    <p>{review.recommendation}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="cta-sidebar">
          <div className="product-summary-card">
            <div className="product-logo">Z</div>
            <h3>Zoom Workplace</h3>
            <p className="category">Unified Communications as a Service (UCaaS)</p>
            <div className="overall-rating">
              <span className="rating">8.4</span>
              <span>out of 10</span>
            </div>
            <p className="product-description">
              Zoom Workplace, Zoom's open collaboration platform with an AI Companion, 
              empowers teams to connect and collaborate seamlessly.
            </p>
            <div className="cta-links">
              <a href="#" className="cta-link">Product overview →</a>
              <a href="#" className="cta-link">Get pricing →</a>
              <a href="/" className="cta-link">← Back to all personas</a>
            </div>
          </div>
        </aside>
      </div>
    </article>
  )
}

export default PersonaReviewsPage

