import requests

def seed_articles():
    data = [
        {
            "name": "Reinforcement Learning and Dominance Hierarchies",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus id provident, velit quasi vitae ut quia ab, laudantium omnis. Autem, molestiae totam error voluptate recusandae natus non mollitia laboriosam beatae.",
            "preview": "https://source.unsplash.com/600x300"
        },
        {
            "name": "Why can we still not accurately describe what AI is?",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus id provident, velit quasi vitae ut quia ab, laudantium omnis. Autem, molestiae totam error voluptate recusandae natus non mollitia laboriosam beatae.",
            "preview": "https://source.unsplash.com/600x300"
        },
        {
            "name": "Can a reinforcement agent choose its own reward function?",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus id provident, velit quasi vitae ut quia ab, laudantium omnis. Autem, molestiae totam error voluptate recusandae natus non mollitia laboriosam beatae.",
            "preview": "https://source.unsplash.com/600x300"
        },
        {
            "name": "Are thoughts deterministic?",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus id provident, velit quasi vitae ut quia ab, laudantium omnis. Autem, molestiae totam error voluptate recusandae natus non mollitia laboriosam beatae.",
            "preview": "https://source.unsplash.com/600x300"
        }
    ]

    for i in data:
        requests.post('http://localhost:8000/articles', json=i, headers={'Authorization': 'test'})

def seed_datasets():
    data = [
        {
            "name": "Global Terrorism",
            "description": "Worldwide terrorist attacks from 1970-2017",
            "instances": 180000
        },
        {
            "name": "World Development Indicators",
            "description": "Country development indicators from around the world",
            "instances": 10200
        },
        {
            "name": "Wine Reviews",
            "description": "This is a test description of a fake dataset",
            "instances": 130000
        },
        {
            "name": "Global Terrorism",
            "description": "This is a test description of a fake dataset",
            "instances": 180000
        },
        {
            "name": "Game of Thrones Deaths",
            "description": "This is a test description of a fake dataset",
            "instances": 5123
        },
        {
            "name": "Global Terrorism",
            "description": "Worldwide terrorist attacks from 1970-2017",
            "instances": 180000
        },
        {
            "name": "World Development Indicators",
            "description": "Country development indicators from around the world",
            "instances": 10200
        },
        {
            "name": "Wine Reviews",
            "description": "This is a test description of a fake dataset",
            "instances": 130000
        },
        {
            "name": "Global Terrorism",
            "description": "This is a test description of a fake dataset",
            "instances": 180000
        },
        {
            "name": "Game of Thrones Deaths",
            "description": "This is a test description of a fake dataset",
            "instances": 5123
        }
    ]

    for i in data:
        requests.post('http://localhost:8000/datasets', json=i, headers={'Authorization': 'test'})

def seed_events():
    events = [
        {
            'name': 'NIPS: Neural Information Processing Systems',
            'location': 'Montreal, Canada',
            'date': 'Dec 02 - Dec 08'
        },
        {
            'name': 'SC: The International Conference for High Performance Computing',
            'location': 'Dallas, TX',
            'date': 'Aug 19 - Aug 23'
        },
        {
            'name': 'ICML: International Conference on Machine Learning',
            'location': 'Stockholm, Sweden',
            'date': 'Jul 10 - Jul 15'
        },
        {
            'name': 'CVPR: Computer Vision and Pattern Recognition',
            'location': 'Long Beach, CA',
            'date': 'Jun 15 - Jun 21'
        },
        {
            'name': 'KDD: Knowledge Discovery and Data Mining',
            'location': 'London, UK',
            'date': 'Aug 19, Aug 23'
        },
        {
            'name': 'NIPS: Neural Information Processing Systems',
            'location': 'Montreal, Canada',
            'date': 'Dec 02 - Dec 08'
        },
        {
            'name': 'SC: The International Conference for High Performance Computing',
            'location': 'Dallas, TX',
            'date': 'Aug 19 - Aug 23'
        },
        {
            'name': 'ICML: International Conference on Machine Learning',
            'location': 'Stockholm, Sweden',
            'date': 'Jul 10 - Jul 15'
        },
        {
            'name': 'CVPR: Computer Vision and Pattern Recognition',
            'location': 'Long Beach, CA',
            'date': 'Jun 15 - Jun 21'
        },
        {
            'name': 'KDD: Knowledge Discovery and Data Mining',
            'location': 'London, UK',
            'date': 'Aug 19, Aug 23'
        }
    ]

    for event in events:
        requests.post('http://localhost:8000/events', json=event, headers={'Authorization': 'test'})

def seed_models():
    data = [
        {
            "name": "Neural Style Tranfer",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel esse voluptas iste velit. Nemo nisi incidunt veritatis modi id soluta, ipsam vitae laboriosam sint sed rem quo pariatur voluptatibus inventore."
        },
        {
            "name": "Chatbot",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel esse voluptas iste velit. Nemo nisi incidunt veritatis modi id soluta, ipsam vitae laboriosam sint sed rem quo pariatur voluptatibus inventore."
        },
        {
            "name": "Deep Dream",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel esse voluptas iste velit. Nemo nisi incidunt veritatis modi id soluta, ipsam vitae laboriosam sint sed rem quo pariatur voluptatibus inventore."
        },
        {
            "name": "Sequence to Sequence Translation",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel esse voluptas iste velit. Nemo nisi incidunt veritatis modi id soluta, ipsam vitae laboriosam sint sed rem quo pariatur voluptatibus inventore."
        },
        {
            "name": "Character Level Generation",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel esse voluptas iste velit. Nemo nisi incidunt veritatis modi id soluta, ipsam vitae laboriosam sint sed rem quo pariatur voluptatibus inventore."
        },
        {
            "name": "Semantic Analysis",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel esse voluptas iste velit. Nemo nisi incidunt veritatis modi id soluta, ipsam vitae laboriosam sint sed rem quo pariatur voluptatibus inventore."
        },
        {
            "name": "Porn Detection",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel esse voluptas iste velit. Nemo nisi incidunt veritatis modi id soluta, ipsam vitae laboriosam sint sed rem quo pariatur voluptatibus inventore."
        },
        {
            "name": "Image Caption Generator",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel esse voluptas iste velit. Nemo nisi incidunt veritatis modi id soluta, ipsam vitae laboriosam sint sed rem quo pariatur voluptatibus inventore."
        }
    ]

    for i in data:
        requests.post('http://localhost:8000/models', json=i, headers={'Authorization': 'test'})

def seed_papers():
    data = [
        {
            "name": "A Neural Algorithm of Artistic Style",
            "abstract": "In fine art, especially painting, humans have mastered the skill to create unique visual experiences through composing a complex interplay between the content and style of an image. Thus far the algorithmic basis of this process is unknown and there exists no artificial system with similar capabilities. However, in other key areas of visual perception such as object and face recognition near-human performance was recently demonstrated by a class of biologically inspired vision models called Deep Neural Networks. Here we introduce an artificial system based on a Deep Neural Network that creates artistic images of high perceptual quality. The system uses neural representations to separate and recombine content and style of arbitrary images, providing a neural algorithm for the creation of artistic images. Moreover, in light of the striking similarities between performance-optimised artificial neural networks and biological vision, our work offers a path forward to an algorithmic understanding of how humans create and perceive artistic imagery."
        },
        {
            "name": "A Neural Conversational Model",
            "abstract": "Conversational modeling is an important task in natural language understanding and machine intelligence. Although previous approaches exist, they are often restricted to specific domains (e.g., booking an airline ticket) and require hand-crafted rules. In this paper, we present a simple approach for this task which uses the recently proposed sequence to sequence framework. Our model converses by predicting the next sentence given the previous sentence or sentences in a conversation. The strength of our model is that it can be trained end-to-end and thus requires much fewer hand-crafted rules. We find that this straightforward model can generate simple conversations given a large conversational training dataset. Our preliminary results suggest that, despite optimizing the wrong objective function, the model is able to converse well. It is able extract knowledge from both a domain specific dataset, and from a large, noisy, and general domain dataset of movie subtitles. On a domain-specific IT helpdesk dataset, the model can find a solution to a technical problem via conversations. On a noisy open-domain movie transcript dataset, the model can perform simple forms of common sense reasoning. As expected, we also find that the lack of consistency is a common failure mode of our model."
        },
        {
            "name": "Generating Text with Recurrent Neural Networks",
            "abstract": "Recurrent Neural Networks (RNNs) are very powerful sequence models that do not enjoy widespread use because it is extremely difficult to train them properly. Fortunately, recent advances in Hessian-free optimization have been able to overcome the difficulties associated with training RNNs, making it possible to apply them successfully to challenging sequence problems. In this paper we demonstrate the power of RNNs trained with the new Hessian-Free optimizer (HF) by applying them to character-level language modeling tasks. The standard RNN architecture, while effective, is not ideally suited for such tasks, so we introduce a new RNN variant that uses multiplicative (or \"gated\") connections which allow the current input character to determine the transition matrix from one hidden state vector to the next. After training the multiplicative RNN with the HF optimizer for five days on 8 high-end Graphics Processing Units, we were able to surpass the performance of the best previous single method for character-level language modeling – a hierarchical non-parametric sequence model. To our knowledge this represents the largest recurrent neural network application to date."
        },
        {
            "name": "Human Level Control Through Deep Reinforcement Learning",
            "abstract": "The theory of reinforcement learning provides a normative account deeply rooted in psychological and neuroscientific perspectives on animal behaviour, of how agents may optimize their control of an environment. To use reinforcement learning successfully in situations approaching real-world complexity, however, agents are confronted with a difficult task: they must derive efficient representations of the environment from high-dimensional sensory inputs, and use these to generalize past experience to new situations. Remarkably, humans and other animals seem to solve this problem through a harmonious combination of reinforcement learning and hierarchical sensory processing systems, the former evidenced by a wealth of neural data revealing notable parallels between the phasic signals emitted by dopaminergic neurons and temporal difference reinforcement learning algorithms. While reinforcement learning agents have achieved some successes in a variety of domains, their applicability has previously been limited to domains in which useful features can be handcrafted, or to domains with fully observed, low-dimensional state spaces. Here we use recent advances in training deep neural networks to develop a novel artificial agent, termed a deep Q-network, that can learn successful policies directly from high-dimensional sensory inputs using end-to-end reinforcement learning. We tested this agent on the challenging domain of classic Atari 2600 games. We demonstrate that the deep Q-network agent, receiving only the pixels and the game score as inputs, was able to surpass the performance of all previous algorithms and achieve a level comparable to that of a professional human games tester across a set of 49 games, using the same algorithm, network architecture and hyperparameters. This work bridges the divide between high-dimensional sensory inputs and actions, resulting in the first artificial agent that is capable of learning to excel at a diverse array of challenging tasks."
        },
        {
            "name": "Sequence to Sequence Learning with Neural Networks",
            "abstract": " Deep Neural Networks (DNNs) are powerful models that have achieved excellent performance on difficult learning tasks. Although DNNs work well whenever large labeled training sets are available, they cannot be used to map sequences to sequences. In this paper, we present a general end-to-end approach to sequence learning that makes minimal assumptions on the sequence structure. Our method uses a multilayered Long Short-Term Memory (LSTM) to map the input sequence to a vector of a fixed dimensionality, and then another deep LSTM to decode the target sequence from the vector. Our main result is that on an English to French translation task from the WMT'14 dataset, the translations produced by the LSTM achieve a BLEU score of 34.8 on the entire test set, where the LSTM's BLEU score was penalized on out-of-vocabulary words. Additionally, the LSTM did not have difficulty on long sentences. For comparison, a phrase-based SMT system achieves a BLEU score of 33.3 on the same dataset. When we used the LSTM to rerank the 1000 hypotheses produced by the aforementioned SMT system, its BLEU score increases to 36.5, which is close to the previous best result on this task. The LSTM also learned sensible phrase and sentence representations that are sensitive to word order and are relatively invariant to the active and the passive voice. Finally, we found that reversing the order of the words in all source sentences (but not target sentences) improved the LSTM's performance markedly, because doing so introduced many short term dependencies between the source and the target sentence which made the optimization problem easier."
        }
    ]

    for i in data:
        requests.post('http://localhost:8000/papers', json=i, headers={'Authorization': 'test'})

def seed_projects():
    data = [
        {
            'name': 'Launch Pad',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim perferendis consequatur voluptatibus sequi, dolorum deleniti maiores eos fugiat. Velit voluptatum aperiam repellat architecto doloremque vero accusantium, quia officia corporis optio.',
            'preview': 'https://source.unsplash.com/600x300'
        },
        {
            'name': 'Mission Control',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim perferendis consequatur voluptatibus sequi, dolorum deleniti maiores eos fugiat. Velit voluptatum aperiam repellat architecto doloremque vero accusantium, quia officia corporis optio.',
            'preview': 'https://source.unsplash.com/600x300'
        }
    ]

    for item in data:
        requests.post('http://localhost:8000/projects', json=item, headers={'Authorization': 'test'})

def seed_users():
    data = { 'email': 'tim@algonomicon.com' }
    requests.post('http://localhost:8000/users', json=data, headers={'Authorization': 'test'})

print('Seeding project...')

seed_articles()
seed_datasets()
seed_events()
seed_models()
seed_papers()
seed_projects()
seed_users()

print('Seeded')