import Article from './Article'

// export const generated = () => {
// //   return <Article key={article.id} />
// // }

//   return (
//     <Article
//       article={{
//         id: 1,
//         title: 'First Post',
//         body:
//           'Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Street art next level umami squid. Hammock hexagon glossier 8-bit banjo. Neutra la croix mixtape echo park four loko semiotics kitsch forage chambray. Semiotics salvia selfies jianbing hella shaman. Letterpress helvetica vaporware cronut, shaman butcher YOLO poke fixie hoodie gentrify woke heirloom.',
//         createdAt: '2020-01-01T12:34:56Z',
//       }}

//       // article={ article }
//   />




// )
// }

// Option 2

const ARTICLE = {
  id: 1,
  title: 'First Post',
  body: `Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Street art next level umami squid. Hammock hexagon glossier 8-bit banjo. Neutra la croix mixtape echo park four loko semiotics kitsch forage chambray. Semiotics salvia selfies jianbing hella shaman. Letterpress helvetica vaporware cronut, shaman butcher YOLO poke fixie hoodie gentrify woke heirloom.`,
  createdAt: '2020-01-01T12:34:56Z',
}

export const full = () => {
  return <Article article={ARTICLE} />
}

export const summary = () => {
  return <Article article={ARTICLE} summary={true} />
}


// Option 3

// export const generated = () => {
//   return (
//     <Article
//       article={{
//         id: 1,
//         title: 'First Post',
//         body:
//           'Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Street art next level umami squid. Hammock hexagon glossier 8-bit banjo. Neutra la croix mixtape echo park four loko semiotics kitsch forage chambray. Semiotics salvia selfies jianbing hella shaman. Letterpress helvetica vaporware cronut, shaman butcher YOLO poke fixie hoodie gentrify woke heirloom.',
//         createdAt: '2020-01-01T12:34:56Z',
//       }}
//     />
//   )
// }

export default { title: 'Components/Article' }
