"use client";

import {
  AspectRatio,
  Center,
  Container,
  Group,
  Image,
  Modal,
  Paper,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Play } from "@phosphor-icons/react";

export function SectionCelebrationsAboutShowcase() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Paper
        radius={0}
        h="100vh"
        pos="relative"
        onClick={() => open()}
        style={{
          cursor: "pointer",
        }}
      >
        <Image
          style={{
            filter: "brightness(.2)",
          }}
          pos="absolute"
          w="100%"
          h="100%"
          top={0}
          left={0}
          src="https://images.pexels.com/photos/6224982/pexels-photo-6224982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />

        <Container size="xs" pt={300}>
          <Paper
            p="xl"
            bg="var(--ke-color-800)"
            radius="sm"
            style={{
              backdropFilter: "blur(10px)",
            }}
          >
            <Group justify="space-between" opacity={0.5}>
              <Text c="gray.0" size="xs">
                CLASSICS SHOWREEL
              </Text>
              <Text c="gray.0" size="xs">
                2025
              </Text>
              <Text c="gray.0" size="xs">
                THE CLASSICS
              </Text>
            </Group>

            <Group justify="center" h={400}>
              <Play weight="fill" color="white" />{" "}
              <Text
                c="gray.0"
                className="celebration-heading"
                style={{
                  fontSize: "6rem",
                }}
              >
                Reel
              </Text>
            </Group>

            <Group justify="space-between" opacity={0.5}>
              <Text c="gray.0" size="xs">
                CLASSICS SHOWREEL
              </Text>
              <Text c="gray.0" size="xs">
                2025
              </Text>
              <Text c="gray.0" size="xs">
                THE CLASSICS
              </Text>
            </Group>
          </Paper>
        </Container>
      </Paper>

      <Modal
        size="80%"
        opened={opened}
        onClose={close}
        withCloseButton={false}
        centered
      >
        <AspectRatio ratio={16 / 9}>
          <iframe
            src="https://www.youtube.com/embed/mzJ4vCjSt28"
            title="YouTube video player"
            style={{ border: 0, marginBottom: -10 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio>
      </Modal>
    </>
  );
}
