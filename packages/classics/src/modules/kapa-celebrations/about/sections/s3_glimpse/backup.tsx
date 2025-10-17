export function XYZ() {
  return <></>;
}

//   <Container
//         size="sm"
//         py={100}
//         pos="relative"
//         style={{
//           zIndex: 2,
//         }}
//       >
//         <Stack>
//           <motion.div
//             variants={variantTextAnimate(0)}
//             initial="initial"
//             animate="visible"
//           >
//             <Text size="xs" fw={700} ta="center" tt="uppercase" opacity={0.5}>
//               THE RECIPE
//             </Text>
//           </motion.div>
//           <motion.div
//             variants={variantTextAnimate(0)}
//             initial="initial"
//             animate="visible"
//             className="kc-heading"
//             style={{
//               textAlign: "center",
//             }}
//           >
//             Our Recipe For
//             <br />
//             Better Celebrations.
//           </motion.div>

//           <motion.div
//             variants={variantTextAnimate(0)}
//             initial="initial"
//             animate="visible"
//           >
//             <Text size="sm" fw={700} ta="center" opacity={0.5}>
//               A perfect blend of creativity, meticulous planning, and seamless
//               execution, all designed to deliver unforgettable, stress-free
//               celebrations.
//             </Text>
//           </motion.div>
//         </Stack>
//       </Container>

//       <Container
//         pb={{
//           base: 100,
//           lg: 200,
//         }}
//       >
//         <Grid gutter="xl" align="center">
//           <Grid.Col
//             span={{ base: 12, lg: 3.5 }}
//             offset={{ base: 0, lg: 2.5 }}
//             pos="relative"
//           >
//             {/* <div
//               style={{
//                 position: "absolute",
//                 top: "-30%",
//                 right: "90%",
//                 transform: "rotate(180deg) scaleY(-1)",
//                 zIndex: 1,
//               }}
//             >
//               <animateSvg.MotionFlowerLeaves />
//             </div> */}

//             <Paper
//               style={{
//                 transform: "rotate(-3deg)",
//               }}
//               p="6px"
//               withBorder
//               radius="sm"
//               shadow="xl"
//             >
//               <Image
//                 pos="relative"
//                 style={{
//                   zIndex: 2,
//                 }}
//                 radius="xs"
//                 h={250}
//                 src="https://images.unsplash.com/photo-1580795478844-5ed694336c90?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               />

//               <Text mt="6px" size="xs">
//                 Understanding your vision.
//               </Text>
//             </Paper>
//           </Grid.Col>
//           <Grid.Col span={{ base: 12, lg: 4 }} pt="xl">
//             <Text
//               c="var(--kc-color-600)"
//               fw={600}
//               className="kc-heading"
//               style={{
//                 fontSize: "2rem !important",
//                 lineHeight: "2.5rem !important",
//               }}
//             >
//               Understanding
//               <br />
//               your Vision.
//             </Text>
//             <Text size="sm" mt="md" opacity={0.5}>
//               We start by deeply understanding your unique vision—ensuring every
//               detail reflects your dreams, desires, and personal style. It’s
//               about creating a celebration that’s unmistakably you.
//             </Text>
//           </Grid.Col>
//           <Grid.Col span={{ base: 12, lg: 4 }} offset={{ base: 0, lg: 2 }}>
//             <Text
//               c="var(--kc-color-600)"
//               fw={600}
//               ta={{ base: "center", lg: "right" }}
//               className="kc-heading"
//               style={{
//                 fontSize: "2rem !important",
//                 lineHeight: "2.5rem !important",
//               }}
//             >
//               Crafting a concept
//               <br />
//               Around Your Vision
//             </Text>
//             <Text
//               size="sm"
//               mt="md"
//               opacity={0.5}
//               ta={{ base: "center", lg: "right" }}
//             >
//               Next, we shape your ideas into a thoughtful, inspired
//               concept—blending creativity with precision to design an experience
//               that feels both deeply personal and truly extraordinary.
//             </Text>
//           </Grid.Col>
//           <Grid.Col span={{ base: 12, lg: 4 }}>
//             <Paper
//               style={{
//                 transform: "rotate(3deg)",
//               }}
//               p="6px"
//               withBorder
//               radius="sm"
//               shadow="xl"
//             >
//               <Image
//                 visibleFrom="lg"
//                 pos="relative"
//                 style={{
//                   zIndex: 2,
//                 }}
//                 radius="xs"
//                 h={250}
//                 src="https://images.unsplash.com/photo-1580795478844-5ed694336c90?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               />
//               <Text mt="6px" size="xs">
//                 Understanding your vision.
//               </Text>
//             </Paper>
//           </Grid.Col>
//           <Grid.Col
//             span={{ base: 12, lg: 5 }}
//             offset={{ base: 0, lg: 1 }}
//             pos="relative"
//           >
//             {/* <div
//               style={{
//                 position: "absolute",
//                 top: "75%",
//                 right: "-30%",
//                 transform: "scaleY(-1)",
//                 zIndex: 1,
//               }}
//             >
//               <animateSvg.MotionFlowerLeaves />
//             </div> */}
//             <Paper
//               style={{
//                 transform: "rotate(-8deg)",
//               }}
//               p="6px"
//               withBorder
//               radius="sm"
//               shadow="xl"
//             >
//               <Image
//                 pos="relative"
//                 style={{
//                   zIndex: 2,
//                 }}
//                 radius="xs"
//                 h={300}
//                 src="https://images.unsplash.com/photo-1580795478844-5ed694336c90?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               />

//               <Text mt="6px" size="xs">
//                 Understanding your vision.
//               </Text>
//             </Paper>
//           </Grid.Col>
//           <Grid.Col span={{ base: 12, lg: 4 }} pt="xl">
//             <Text
//               c="var(--kc-color-600)"
//               fw={600}
//               className="kc-heading"
//               style={{
//                 fontSize: "2rem !important",
//                 lineHeight: "2.5rem !important",
//               }}
//             >
//               Smooth Execution,
//               <br />
//               Made Effortless
//             </Text>
//             <Text size="sm" mt="md" opacity={0.5}>
//               With the concept in place, we handle every detail with care and
//               professionalism—ensuring a seamless flow from start to finish, so
//               you can simply relax and savor each moment.
//             </Text>
//           </Grid.Col>
//         </Grid>
//       </Container>
