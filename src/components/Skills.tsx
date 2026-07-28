import { Box, Text, Title, SimpleGrid, Group } from "@mantine/core";
import { useReveal } from "../hooks/useReveal";

const skillGroups = [
  {
    category: "Backend & Architecture",
    icon: "⚙️",
    color: "rgba(9,79,183,0.15)",
    borderColor: "rgba(9,79,183,0.3)",
    skills: [
      "PHP",
      "Laravel",
      "Python",
      "Microservices",
      "Flask",
      "OOP",
      "REST APIs",
      "Magento 2",
      "Design Patterns",
    ],
  },
  {
    category: "Databases & Search",
    icon: "🗄️",
    color: "rgba(9,140,183,0.1)",
    borderColor: "rgba(9,140,183,0.25)",
    skills: [
      "MySQL",
      "PostgreSQL",
      "Redis (Caching & Queues)",
      "Elasticsearch",
      "Schema Design",
      "Query Optimization",
    ],
  },
  {
    category: "APIs & Networking",
    icon: "🔌",
    color: "rgba(9,140,183,0.1)",
    borderColor: "rgba(10, 161, 211, 0.25)",
    skills: [
      "RESTful API Design",
      "Real-Time WebSockets (Socket.io)",
      "Payment Gateway Integrations",
    ],
  },
  {
    category: "Frontend & UI",
    icon: "🎨",
    color: "rgba(79,183,9,0.08)",
    borderColor: "rgba(79,183,9,0.2)",
    skills: ["JavaScript", "Vue.js", "Filament", "HTML5 & CSS3"],
  },
  {
    category: "DevOps & Tools",
    icon: "🚀",
    color: "rgba(183,9,140,0.08)",
    borderColor: "rgba(183,9,140,0.2)",
    skills: ["Git (GitLab & GitHub)", "CI/CD", "Technical Documentation"],
  },
  {
    category: "Methodologies",
    icon: "🎯",
    color: "rgba(10, 31, 224, 0.2)",
    borderColor: "rgba(10, 31, 224, 0.2)",
    skills: [
      "Agile/Scrum",
      "Jira Sprint Planning",
      "FinTech Security Standards",
    ],
  },
];

export default function Skills() {
  const { ref, visible } = useReveal();

  return (
    <Box
      component="section"
      id="skills"
      style={{
        background: "#07070b",
        padding: "6rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgb(9,79,183), transparent)",
        }}
      />
      <Box
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(9,79,183,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Box
        ref={ref}
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        <Box
          style={{
            marginBottom: "4rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <Text
            size="xs"
            c="brand.6"
            style={{
              textTransform: "uppercase",
              letterSpacing: "3.5px",
              fontWeight: 700,
              display: "block",
              marginBottom: "0.75rem",
            }}
          >
            My expertise
          </Text>
          <Title
            order={2}
            style={{
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "-0.5px",
              lineHeight: 1.05,
            }}
          >
            Skills & Technologies
          </Title>
          <Group gap="0.75rem" mt="1rem">
            <Box
              style={{
                width: "48px",
                height: "3px",
                background:
                  "linear-gradient(90deg, rgb(9,79,183), rgb(100,170,255))",
                borderRadius: "2px",
              }}
            />
            <Box
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "rgb(9,79,183)",
                boxShadow: "0 0 10px rgba(9,79,183,0.8)",
              }}
            />
          </Group>
        </Box>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="1.25rem" mb="3.5rem">
          {skillGroups.map((group, gi) => (
            <Box
              key={group.category}
              style={{
                padding: "1.6rem",
                background: group.color,
                border: `1px solid ${group.borderColor}`,
                borderRadius: "16px",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease ${gi * 0.1}s`,
              }}
            >
              <Group gap="0.75rem" mb="1.5rem">
                <Box
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.3rem",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {group.icon}
                </Box>
                <Title
                  order={3}
                  style={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    letterSpacing: "0.3px",
                  }}
                >
                  {group.category}
                </Title>
              </Group>
              <Box style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.skills.map((skill) => (
                  <Box
                    component="span"
                    key={skill}
                    style={{
                      padding: "0.3rem 0.75rem",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "6px",
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "0.82rem",
                      fontWeight: 500,
                    }}
                  >
                    {skill}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
