export interface Publication {
  title: string
  venue: string
  role: string
  date: string
  url: string
}

export const publications: Publication[] = [
  {
    title: 'Mastering MLOps: A Comprehensive Guide to Build Scalable and Reliable ML Pipelines',
    venue: 'Medium',
    role: 'Author',
    date: 'Mar 2025',
    url: 'https://medium.com/@kartheekvadlamani/mastering-mlops-a-comprehensive-guide-to-build-scalable-and-reliable-machine-learning-pipelines-2c015937056c',
  },
  {
    title: 'New Method for Multi-hop Communication Over Bluetooth in Smartphones',
    venue: 'IJECS',
    role: 'Co-Author',
    date: 'Nov 2018',
    url: 'https://www.ijecs.in/index.php/ijecs/article/view/4204',
  },
]
