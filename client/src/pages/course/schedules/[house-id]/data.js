// src/pages/course/[houseId]/data.js

export const scheduleData = {
  romance: {
    name: 'Romance',
    number: 'NO.01',
    color: 'bg-red-500',
    textColor: 'text-red-500',
    schedule: [
      {
        day: 'MON',
        date: '01',
        sessions: [
          { subject: 'Frontend', code: 'LX11-1', time: '09:00 AM - 11:00 AM', type: 'NOW SHOWING' },
          { subject: 'Backend', code: 'LX11-2', time: '01:00 PM - 03:00 PM', type: 'NOW SHOWING' }
        ]
      },
      {
        day: 'WED',
        date: '02',
        sessions: [
          { subject: 'DevOps', code: 'LX12-1', time: '09:00 AM - 11:00 AM', type: 'COMING' },
          { subject: 'Business Analysis', code: 'LX12-2', time: '01:00 PM - 03:00 PM', type: 'COMING' }
        ]
      },
      {
        day: 'FRI',
        date: '03',
        sessions: [
          { subject: 'Frontend', code: 'LX11-1', time: '10:00 AM - 12:00 PM', type: 'COMING' },
          { subject: 'DevOps', code: 'LX12-1', time: '02:00 PM - 04:00 PM', type: 'COMING' }
        ]
      },
      {
        day: 'THU',
        date: '04',
        sessions: [
          { subject: 'Backend', code: 'LX11-2', time: '09:00 AM - 11:00 AM', type: 'COMING' },
          { subject: 'Business Analysis', code: 'LX12-2', time: '01:30 PM - 03:30 PM', type: 'COMING' }
        ]
      }
    ]
  },
  action: {
    name: 'Action',
    number: 'NO.02',
    color: 'bg-blue-500',
    textColor: 'text-blue-500',
    schedule: [
      {
        day: 'MON',
        date: '01',
        sessions: [
          { subject: 'DevOps', code: 'LX12-1', time: '08:00 AM - 10:00 AM', type: 'NOW SHOWING' },
          { subject: 'Frontend', code: 'LX11-1', time: '02:00 PM - 04:00 PM', type: 'NOW SHOWING' }
        ]
      },
      {
        day: 'WED',
        date: '02',
        sessions: [
          { subject: 'Backend', code: 'LX11-2', time: '09:30 AM - 11:30 AM', type: 'COMING' },
          { subject: 'Business Analysis', code: 'LX12-2', time: '01:00 PM - 03:00 PM', type: 'COMING' }
        ]
      },
      {
        day: 'FRI',
        date: '03',
        sessions: [
          { subject: 'DevOps', code: 'LX12-1', time: '09:00 AM - 11:00 AM', type: 'COMING' },
          { subject: 'Frontend', code: 'LX11-1', time: '01:30 PM - 03:30 PM', type: 'COMING' }
        ]
      },
      {
        day: 'THU',
        date: '04',
        sessions: [
          { subject: 'Business Analysis', code: 'LX12-2', time: '10:00 AM - 12:00 PM', type: 'COMING' },
          { subject: 'Backend', code: 'LX11-2', time: '02:30 PM - 04:30 PM', type: 'COMING' }
        ]
      }
    ]
  },
  'science-fiction': {
    name: 'Science Fiction',
    number: 'NO.03',
    color: 'bg-purple-500',
    textColor: 'text-purple-500',
    schedule: [
      {
        day: 'MON',
        date: '01',
        sessions: [
          { subject: 'Backend', code: 'LX11-2', time: '09:00 AM - 11:00 AM', type: 'NOW SHOWING' },
          { subject: 'DevOps', code: 'LX12-1', time: '01:00 PM - 03:00 PM', type: 'NOW SHOWING' }
        ]
      },
      {
        day: 'WED',
        date: '02',
        sessions: [
          { subject: 'Frontend', code: 'LX11-1', time: '08:30 AM - 10:30 AM', type: 'COMING' },
          { subject: 'Business Analysis', code: 'LX12-2', time: '02:00 PM - 04:00 PM', type: 'COMING' }
        ]
      },
      {
        day: 'FRI',
        date: '03',
        sessions: [
          { subject: 'Backend', code: 'LX11-2', time: '10:00 AM - 12:00 PM', type: 'COMING' },
          { subject: 'DevOps', code: 'LX12-1', time: '01:30 PM - 03:30 PM', type: 'COMING' }
        ]
      },
      {
        day: 'THU',
        date: '04',
        sessions: [
          { subject: 'Frontend', code: 'LX11-1', time: '09:30 AM - 11:30 AM', type: 'COMING' },
          { subject: 'Business Analysis', code: 'LX12-2', time: '02:30 PM - 04:30 PM', type: 'COMING' }
        ]
      }
    ]
  },
  horror: {
    name: 'Horror',
    number: 'NO.04',
    color: 'bg-orange-500',
    textColor: 'text-orange-500',
    schedule: [
      {
        day: 'MON',
        date: '01',
        sessions: [
          { subject: 'Business Analysis', code: 'LX12-2', time: '08:00 AM - 10:00 AM', type: 'NOW SHOWING' },
          { subject: 'Frontend', code: 'LX11-1', time: '01:00 PM - 03:00 PM', type: 'NOW SHOWING' }
        ]
      },
      {
        day: 'WED',
        date: '02',
        sessions: [
          { subject: 'DevOps', code: 'LX12-1', time: '09:00 AM - 11:00 AM', type: 'COMING' },
          { subject: 'Backend', code: 'LX11-2', time: '02:00 PM - 04:00 PM', type: 'COMING' }
        ]
      },
      {
        day: 'FRI',
        date: '03',
        sessions: [
          { subject: 'Business Analysis', code: 'LX12-2', time: '09:30 AM - 11:30 AM', type: 'COMING' },
          { subject: 'Frontend', code: 'LX11-1', time: '01:30 PM - 03:30 PM', type: 'COMING' }
        ]
      },
      {
        day: 'THU',
        date: '04',
        sessions: [
          { subject: 'DevOps', code: 'LX12-1', time: '10:00 AM - 12:00 PM', type: 'COMING' },
          { subject: 'Backend', code: 'LX11-2', time: '02:30 PM - 04:30 PM', type: 'COMING' }
        ]
      }
    ]
  },
  fantasy: {
    name: 'Fantasy',
    number: 'NO.05',
    color: 'bg-green-500',
    textColor: 'text-green-500',
    schedule: [
      {
        day: 'MON',
        date: '01',
        sessions: [
          { subject: 'Frontend', code: 'LX11-1', time: '08:30 AM - 10:30 AM', type: 'NOW SHOWING' },
          { subject: 'Business Analysis', code: 'LX12-2', time: '01:00 PM - 03:00 PM', type: 'NOW SHOWING' }
        ]
      },
      {
        day: 'WED',
        date: '02',
        sessions: [
          { subject: 'Backend', code: 'LX11-2', time: '09:00 AM - 11:00 AM', type: 'COMING' },
          { subject: 'DevOps', code: 'LX12-1', time: '02:00 PM - 04:00 PM', type: 'COMING' }
        ]
      },
      {
        day: 'FRI',
        date: '03',
        sessions: [
          { subject: 'Frontend', code: 'LX11-1', time: '10:00 AM - 12:00 PM', type: 'COMING' },
          { subject: 'Business Analysis', code: 'LX12-2', time: '01:30 PM - 03:30 PM', type: 'COMING' }
        ]
      },
      {
        day: 'THU',
        date: '04',
        sessions: [
          { subject: 'Backend', code: 'LX11-2', time: '09:30 AM - 11:30 AM', type: 'COMING' },
          { subject: 'DevOps', code: 'LX12-1', time: '02:30 PM - 04:30 PM', type: 'COMING' }
        ]
      }
    ]
  }
};