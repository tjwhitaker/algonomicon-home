import hug

@hug.get('/events')
def events_index():
    return [
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