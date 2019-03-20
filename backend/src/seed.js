const fs = require('fs')
const parser = require('gray-matter')
const marked = require('marked')
const request = require('request')

const seedArticles = (dirname) => {
  fs.readdir(dirname, (err, files) => {
    files = files.filter(file => file.endsWith('.md'))

    files.forEach((filename) => {
      fs.readFile(dirname + filename, (err, data) => {
        const matter = parser(data)

        const article = {
          name: matter.data.name,
          slug: matter.data.slug,
          hero: matter.data.hero,
          description: matter.data.description,
          outline: marked(matter.data.outline),
          content: marked(matter.content)
        }

        const options = {
          uri: 'http://localhost:8000/articles',
          method: 'POST',
          json: article,
          headers: {'Authorization': process.env.GOD_TOKEN}
        }

        request.post(options, () => {
          console.log('Posted Article')
        })
      })
    })
  })
}

const seedDatasets = () => {
  const datasets = [
    {
      "name": "MNIST",
      "slug": "mnist",
      "description": "Hand drawn digits",
      "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae explicabo sequi ipsam provident harum dolorum natus. Voluptas consequatur id explicabo inventore iure enim neque asperiores a minus. Hic, perspiciatis, et!"
    },
      {
      "name": "Fashion MNIST",
      "slug": "fashion-mnist",
      "description": "Clothing Benchmarks",
      "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae explicabo sequi ipsam provident harum dolorum natus. Voluptas consequatur id explicabo inventore iure enim neque asperiores a minus. Hic, perspiciatis, et!"
    },
      {
      "name": "CIFAR10",
      "slug": "cifar10",
      "description": "Canadian Institue for Advanced Research",
      "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae explicabo sequi ipsam provident harum dolorum natus. Voluptas consequatur id explicabo inventore iure enim neque asperiores a minus. Hic, perspiciatis, et!"
    },
      {
      "name": "CIFAR100",
      "slug": "cifar100",
      "description": "Canadian Institue for Advanced Research",
      "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae explicabo sequi ipsam provident harum dolorum natus. Voluptas consequatur id explicabo inventore iure enim neque asperiores a minus. Hic, perspiciatis, et!"
    },
      {
      "name": "PTBLM",
      "slug": "ptblm",
      "description": "Penn Treebank for language modeling",
      "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae explicabo sequi ipsam provident harum dolorum natus. Voluptas consequatur id explicabo inventore iure enim neque asperiores a minus. Hic, perspiciatis, et!"
    },
      {
      "name": "SVHN",
      "slug": "svhn",
      "description": "Street View House Numbers",
      "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae explicabo sequi ipsam provident harum dolorum natus. Voluptas consequatur id explicabo inventore iure enim neque asperiores a minus. Hic, perspiciatis, et!"
    }
  ]

  datasets.forEach(dataset => {
    let options = {
      uri: 'http://localhost:8000/datasets',
      method: 'POST',
      json: dataset,
      headers: {'Authorization': process.env.GOD_TOKEN}
    }

    request.post(options, () => {
      console.log('Posted Dataset')
    })
  })
}

const seedEvents = () => {
  const events = [
    {
      name: "Applied Machine Learning Days",
      slug: "applied-machine-learning-days",
      url: "https://www.appliedmldays.org/",
      date: "Jan 26 - Jan 29, 2019",
      location: "Lausanne, CH"
    },
    {
      name: "AAAI-19",
      slug: "aaai-19",
      url: "https://aaai.org/Conferences/AAAI-19/",
      date: "Jan 27 - Feb 1, 2019",
      location: "Honolulu, Hawaii"
    },
    {
      name: "H2O AI World San Francisco 2019",
      slug: "h2o-ai-world-san-francisco-2019",
      url: "http://h2oworld.h2o.ai/h2o-world-san-francisco/",
      date: "Feb 4 - Feb 5, 2019",
      location: "San Francisco, CA"
    },
    {
      name: "Artificial Intelligence Dev Conference",
      slug: "artificial-intelligence-dev-conference",
      url: "https://www.developerweek.com/conference/artificial-intelligence-dev-conference/",
      date: "Feb 20 - Feb 21, 2019",
      location: "Oakland, CA"
    },
    {
      name: "Data Science Salon Austin (Technology and IoT)",
      slug: "data-science-salon-austin-technology-and-iot",
      url: "https://datascience.salon/austin/",
      date: "Feb 21 - Feb 22, 2019",
      location: "Austin, TX"
    },
    {
      name: "Big Data & Analytics Summit",
      slug: "big-data-and-analytics-summit",
      url: "https://www.bigdatasummitcanada.com/",
      date: "Mar 5 - Mar 6, 2019",
      location: "Toronto, CA"
    },
    {
      name: "GPU Technology Conference",
      slug: "gpu-technology-conference",
      url: "https://www.nvidia.com/en-us/gtc/",
      date: "Mar 17 - Mar 21, 2019",
      location: "Silicon Valley, CA"
    },
    {
      name: "Rework Deep Learning in Finance Summit",
      slug: "rework-deep-learning-in-finance-summit",
      url: "https://www.re-work.co/events/deep-learning-in-finance-summit-london-2019",
      date: "Mar 19 - Mar 20, 2019",
      location: "London, England"
    },
    {
      name: "Reinforce AI Conference",
      slug: "reinforce-ai-conference",
      url: "https://reinforceconf.com/",
      date: "Mar 21 - Mar 22, 2019",
      location: "Budapest, Hungary"
    },
    {
      name: "O'Reilly Strata Data Conference",
      slug: "oreilly-strata-data-conference",
      url: "https://conferences.oreilly.com/strata/strata-ca",
      date: "Mar 25 - Mar 28, 2019",
      location: "San Francisco, CA"
    },
    {
      name: "Big Data & AI Leaders Summit",
      slug: "big-data-and-ai-leaders-summit",
      url: "https://forwardleading.co.uk/summits/big-data-ai-boston-2019",
      date: "Apr 11 - Apr 12, 2019",
      location: "Boston , MA"
    },
    {
      name: "Southern Data Science Conference",
      slug: "southern-data-science-conference",
      url: "https://www.southerndatascience.com/",
      date: "Apr 11 - Apr 12, 2019",
      location: "Atlanta, GA"
    },
    {
      name: "O'Reilly AI Conference",
      slug: "oreilly-ai-conference-ny",
      url: "https://conferences.oreilly.com/artificial-intelligence/ai-ny",
      date: "Apr 15 - Apr 18, 2019",
      location: "New York, NY"
    },
    {
      name: "Spark + AI Summit",
      slug: "spark-and-ai-summit",
      url: "https://databricks.com/sparkaisummit/north-america",
      date: "Apr 23 - Apr 25, 2019",
      location: "San Francisco, CA"
    },
    {
      name: "Computer Vision Conference (CVC) 2019",
      slug: "computer-vision-conference-cvc-2019",
      url: "http://saiconference.com/CVC",
      date: "Apr 25 - Apr 26, 2019",
      location: "Las Vegas, NV"
    },
    {
      name: "AI & Big Data Expo Global",
      slug: "ai-and-big-data-expo-global",
      url: "https://www.ai-expo.net/global/",
      date: "Apr 25 - Apr 26, 2019",
      location: "London, England"
    },
    {
      name: "ODSC East",
      slug: "odsc-east",
      url: "https://odsc.com/boston",
      date: "Apr 30 - May 3, 2019",
      location: "Boston, MA"
    },
    {
      name: "Predictive Analytics World for Industry 4.0",
      slug: "predictive-analytics-world-for-industry-4-0",
      url: "https://predictiveanalyticsworld.de/en/industry4-0/muenchen2019/",
      date: "May 6 - May 7, 2019",
      location: "Munich, Germany"
    },
    {
      name: "Embedded Vision Summit",
      slug: "embedded-vision-summit",
      url: "https://www.embedded-vision.com/summit",
      date: "May 20 - May 23, 2019",
      location: "Santa Clara, CA"
    },
    {
      name: "The Data Science Conference",
      slug: "the-data-science-conference",
      url: "https://www.thedatascienceconference.com/",
      date: "May 23 - May 24, 2019",
      location: "Boston, MA"
    },
    {
      name: "Rework Deep Learning in Healthcare Summit",
      slug: "rework-deep-learning-in-healthcare-summit",
      url: "https://www.re-work.co/events/deep-learning-in-healthcare-summit-boston-2019",
      date: "May 23 - May 24, 2019",
      location: "Boston, MA"
    },
    {
      name: "International Conference on Machine Learning (ICML)",
      slug: "international-conference-on-machine-learning-icml",
      url: "https://icml.cc/Conferences/2019",
      date: "Jun 10 - Jun 15, 2019",
      location: "Long Beach, CA"
    },
    {
      name: "Deep Learning World",
      slug: "deep-learning-world",
      url: "https://www.deeplearningworld.com/",
      date: "Jun 16 - Jun 20, 2019",
      location: "Las Vegas, NV"
    },
    {
      name: "CVPR 2019",
      slug: "cvpr-2019",
      url: "http://cvpr2019.thecvf.com/",
      date: "Jun 16 - Jun 21, 2019",
      location: "Long Beach, CA"
    },
    {
      name: "AI & Big Data Expo Europe",
      slug: "ai-and-big-data-expo-europe",
      url: "https://www.ai-expo.net/europe/",
      date: "Jun 19 - Jun 20, 2019",
      location: "Amsterdam, Netherlands"
    },
    {
      name: "Rework Applied AI Summit",
      slug: "rework-applied-ai-summit",
      url: "https://www.re-work.co/events/applied-ai-summit-san-francisco-2019",
      date: "Jun 20 - Jun 21, 2019",
      location: "San Francisco, CA"
    },
    {
      name: "AIME Conference on Artificial Intelligence in Medicine",
      slug: "aime-conference-on-artificial-intelligence-in-medicine",
      url: "http://aime19.aimedicine.info/",
      date: "Jun 26 - Jun 29, 2019",
      location: "Poznan, Poland"
    },
    {
      name: "MLDM International Conference on Machine Learning and Data Mining",
      slug: "mldm-internation-conference-on-machine-learning-and-data-mining",
      url: "http://www.mldm.de/",
      date: "Jul 20 - Jul 25, 2019",
      location: "New York, NY"
    },
    {
      name: "Rework AI in Finance Summit",
      slug: "rework-ai-in-finance-summit",
      url: "https://www.re-work.co/events/ai-in-finance-summit-new-york-2019",
      date: "Sep 5 - Sep 6, 2019",
      location: "New York, NY"
    },
    {
      name: "O'Reilly AI Conference",
      slug: "oreilly-ai-conference-san-jose",
      url: "https://conferences.oreilly.com/artificial-intelligence/ai-ca",
      date: "Sep 9 - Sep 12, 2019",
      location: "San Jose, CA"
    },
    {
      name: "LOD 2019",
      slug: "lod-2019",
      url: "https://lod2019.icas.xyz/",
      date: "Sep 10 - Sep 13, 2019",
      location: "Siena, Italy"
    },
    {
      name: "The ACM Conference Series on Recommender Systems",
      slug: "the-acm-conference-series-on-recommender-systems",
      url: "https://recsys.acm.org/recsys19/",
      date: "Sep 16 - Sep 20, 2019",
      location: "Copenhagen, Denmark"
    },
    {
      name: "Rework AI in Retail & Advertising Summit",
      slug: "rework-ai-in-retail-and-advertising-summit",
      url: "https://www.re-work.co/events/ai-in-retail-&-advertising-summit-london-2019",
      date: "Sep 19 - Sep 20, 2019",
      location: "London, England"
    },
    {
      name: "Rework Deep Learning Summit",
      slug: "rework-deep-learning-summit",
      url: "https://www.re-work.co/events/deep-learning-summit-london-2019",
      date: "Sep 19 - Sep 20, 2019",
      location: "London, England"
    },
    {
      name: "IEEE MLSP Workshop on ML for Signal Processing",
      slug: "ieee-mlsp-workshop-on-ml-for-signal-processing",
      url: "https://www.ieeemlsp.cc/",
      date: "Oct 13 - Oct 16, 2019",
      location: "Pittsburgh, PA"
    },
    {
      name: "O'Reilly AI Conference",
      slug: "oreilly-ai-conference-london",
      url: "https://conferences.oreilly.com/artificial-intelligence/ai-eu",
      date: "Oct 14 - Oct 19, 2019",
      location: "London, England"
    },
    {
      name: "ICCV 2019 International Conference on Computer Vision",
      slug: "iccv-2019-international-conference-on-computer-vision",
      url: "http://iccv2019.thecvf.com/",
      date: "Oct 27 - Nov 3, 2019",
      location: "Seoul, Korea"
    },
    {
      name: "AI & Big Data Expo",
      slug: "ai-and-big-data-expo-na",
      url: "https://www.ai-expo.net/northamerica/",
      date: "Nov 13 - Nov 14, 2019",
      location: "Santa Clara, CA"
    }
  ]

  events.forEach(event => {
    let options = {
      uri: 'http://localhost:8000/events',
      method: 'POST',
      json: event,
      headers: {'Authorization': process.env.GOD_TOKEN}
    }

    request.post(options, () => {
      console.log('Posted Event')
    })
  })
}

const seedPapers = () => {
  const papers = [
    {
      "name": "A Neural Algorithm of Artistic Style",
      "slug": "a-neural-algorithm-of-artistic-style",
      "abstract": "In fine art, especially painting, humans have mastered the skill to create unique visual experiences through composing a complex interplay between the content and style of an image. Thus far the algorithmic basis of this process is unknown and there exists no artificial system with similar capabilities. However, in other key areas of visual perception such as object and face recognition near-human performance was recently demonstrated by a class of biologically inspired vision models called Deep Neural Networks. Here we introduce an artificial system based on a Deep Neural Network that creates artistic images of high perceptual quality. The system uses neural representations to separate and recombine content and style of arbitrary images, providing a neural algorithm for the creation of artistic images. Moreover, in light of the striking similarities between performance-optimised artificial neural networks and biological vision, our work offers a path forward to an algorithmic understanding of how humans create and perceive artistic imagery."
    },
    {
      "name": "A Neural Conversational Model",
      "slug": "a-neural-conversational-model",
      "abstract": "Conversational modeling is an important task in natural language understanding and machine intelligence. Although previous approaches exist, they are often restricted to specific domains (e.g., booking an airline ticket) and require hand-crafted rules. In this paper, we present a simple approach for this task which uses the recently proposed sequence to sequence framework. Our model converses by predicting the next sentence given the previous sentence or sentences in a conversation. The strength of our model is that it can be trained end-to-end and thus requires much fewer hand-crafted rules. We find that this straightforward model can generate simple conversations given a large conversational training dataset. Our preliminary results suggest that, despite optimizing the wrong objective function, the model is able to converse well. It is able extract knowledge from both a domain specific dataset, and from a large, noisy, and general domain dataset of movie subtitles. On a domain-specific IT helpdesk dataset, the model can find a solution to a technical problem via conversations. On a noisy open-domain movie transcript dataset, the model can perform simple forms of common sense reasoning. As expected, we also find that the lack of consistency is a common failure mode of our model."
    },
    {
      "name": "Generating Text with Recurrent Neural Networks",
      "slug": "generating-text-with-recurrent-neural-networks",
      "abstract": "Recurrent Neural Networks (RNNs) are very powerful sequence models that do not enjoy widespread use because it is extremely difficult to train them properly. Fortunately, recent advances in Hessian-free optimization have been able to overcome the difficulties associated with training RNNs, making it possible to apply them successfully to challenging sequence problems. In this paper we demonstrate the power of RNNs trained with the new Hessian-Free optimizer (HF) by applying them to character-level language modeling tasks. The standard RNN architecture, while effective, is not ideally suited for such tasks, so we introduce a new RNN variant that uses multiplicative (or \"gated\") connections which allow the current input character to determine the transition matrix from one hidden state vector to the next. After training the multiplicative RNN with the HF optimizer for five days on 8 high-end Graphics Processing Units, we were able to surpass the performance of the best previous single method for character-level language modeling – a hierarchical non-parametric sequence model. To our knowledge this represents the largest recurrent neural network application to date."
    },
    {
      "name": "Human Level Control Through Deep Reinforcement Learning",
      "slug": "human-level-control-through-deep-reinforcement-learning",
      "abstract": "The theory of reinforcement learning provides a normative account deeply rooted in psychological and neuroscientific perspectives on animal behaviour, of how agents may optimize their control of an environment. To use reinforcement learning successfully in situations approaching real-world complexity, however, agents are confronted with a difficult task: they must derive efficient representations of the environment from high-dimensional sensory inputs, and use these to generalize past experience to new situations. Remarkably, humans and other animals seem to solve this problem through a harmonious combination of reinforcement learning and hierarchical sensory processing systems, the former evidenced by a wealth of neural data revealing notable parallels between the phasic signals emitted by dopaminergic neurons and temporal difference reinforcement learning algorithms. While reinforcement learning agents have achieved some successes in a variety of domains, their applicability has previously been limited to domains in which useful features can be handcrafted, or to domains with fully observed, low-dimensional state spaces. Here we use recent advances in training deep neural networks to develop a novel artificial agent, termed a deep Q-network, that can learn successful policies directly from high-dimensional sensory inputs using end-to-end reinforcement learning. We tested this agent on the challenging domain of classic Atari 2600 games. We demonstrate that the deep Q-network agent, receiving only the pixels and the game score as inputs, was able to surpass the performance of all previous algorithms and achieve a level comparable to that of a professional human games tester across a set of 49 games, using the same algorithm, network architecture and hyperparameters. This work bridges the divide between high-dimensional sensory inputs and actions, resulting in the first artificial agent that is capable of learning to excel at a diverse array of challenging tasks."
    },
    {
      "name": "Sequence to Sequence Learning with Neural Networks",
      "slug": "sequence-to-sequence-learning-with-neural-networks",
      "abstract": " Deep Neural Networks (DNNs) are powerful models that have achieved excellent performance on difficult learning tasks. Although DNNs work well whenever large labeled training sets are available, they cannot be used to map sequences to sequences. In this paper, we present a general end-to-end approach to sequence learning that makes minimal assumptions on the sequence structure. Our method uses a multilayered Long Short-Term Memory (LSTM) to map the input sequence to a vector of a fixed dimensionality, and then another deep LSTM to decode the target sequence from the vector. Our main result is that on an English to French translation task from the WMT'14 dataset, the translations produced by the LSTM achieve a BLEU score of 34.8 on the entire test set, where the LSTM's BLEU score was penalized on out-of-vocabulary words. Additionally, the LSTM did not have difficulty on long sentences. For comparison, a phrase-based SMT system achieves a BLEU score of 33.3 on the same dataset. When we used the LSTM to rerank the 1000 hypotheses produced by the aforementioned SMT system, its BLEU score increases to 36.5, which is close to the previous best result on this task. The LSTM also learned sensible phrase and sentence representations that are sensitive to word order and are relatively invariant to the active and the passive voice. Finally, we found that reversing the order of the words in all source sentences (but not target sentences) improved the LSTM's performance markedly, because doing so introduced many short term dependencies between the source and the target sentence which made the optimization problem easier."
    }
  ]

  papers.forEach(paper => {
    let options = {
      uri: 'http://localhost:8000/papers',
      method: 'POST',
      json: paper,
      headers: {'Authorization': process.env.GOD_TOKEN}
    }

    request.post(options, () => {
      console.log('Posted Paper')
    })
  })
}

const seedProjects = () => {
  const projects = [
    {
      "name": "Coming Soon",
      "slug": "coming-soon",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim perferendis consequatur voluptatibus sequi, dolorum deleniti maiores eos fugiat. Velit voluptatum aperiam repellat architecto doloremque vero accusantium, quia officia corporis optio.",
      "hero": "https://source.unsplash.com/600x300"
    }
  ]

  projects.forEach(project => {
    let options = {
      uri: 'http://localhost:8000/projects',
      method: 'POST',
      json: project,
      headers: {'Authorization': process.env.GOD_TOKEN}
    }

    request.post(options, () => {
      console.log('Posted Project')
    })
  })
}

const seedVideos = () => {
  const videos = [
    {
      "name": "Hello World",
      "slug": "hello-world",
      "hero": "https://placehold.it/600x300",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam incidunt officia ipsa odit autem eveniet dicta, modi asperiores! Necessitatibus fuga dolores dolorum distinctio tempora reiciendis odio voluptatibus voluptas velit, accusamus!",
      "url": "https://www.youtube.com/watch?v=salrwSVWpC4"
    },
    {
      "name": "Lorem Ipsum",
      "slug": "lorem-ipsum",
      "hero": "https://placehold.it/600x300",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam incidunt officia ipsa odit autem eveniet dicta, modi asperiores! Necessitatibus fuga dolores dolorum distinctio tempora reiciendis odio voluptatibus voluptas velit, accusamus!",
      "url": "https://www.youtube.com/watch?v=salrwSVWpC4"
    },
    {
      "name": "Hello World",
      "slug": "hello-world",
      "hero": "https://placehold.it/600x300",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam incidunt officia ipsa odit autem eveniet dicta, modi asperiores! Necessitatibus fuga dolores dolorum distinctio tempora reiciendis odio voluptatibus voluptas velit, accusamus!",
      "url": "https://www.youtube.com/watch?v=salrwSVWpC4"
    }
  ]

  videos.forEach(video => {
    let options = {
      uri: 'http://localhost:8000/videos',
      method: 'POST',
      json: video,
      headers: {'Authorization': process.env.GOD_TOKEN}
    }

    request.post(options, () => {
      console.log('Posted Video')
    })
  })
}

seedArticles('../../articles/')
seedEvents()
seedDatasets()
seedPapers()
seedProjects()
seedVideos()