// Fixture data 
if (Tickets.find().count() === 0) {
  var now = new Date().getTime();
    
  // Fixtures Groups
  Groups.insert({ tag: 'WISP', name: 'Experts WISP', emails: [ 'stasd_adm_wisp@orange.com' ] });
  Groups.insert({ tag: 'APE', name: 'Experts APE', emails: [ 'stasd_adm_ape@orange.com' ] });
  Groups.insert({ tag: 'RJ', name: 'Experts RJDM', emails: [ 'dgrauet.ext@orange.com', 'maxime.carron@orange.com' ] });
  Groups.insert({ tag: 'CSG', name: 'Experts CSG', emails: [ 'stasd_adm_csg@orange.com' ] });
  Groups.insert({ tag: 'GAA', name: 'Administrateurs Applicatifs', emails: [ 'c3m_adm_gaa@list.orange.com' ] });
  Groups.insert({ tag: 'PIL', name: 'Pilotes de domaines', emails: [ 'lddes.pilotesdomaineaccesdatamobile@orange.com' ] });
    
  // Fixtures Categories
  Categories.insert({ name: 'Sox', color: '#F5F4EA' });
  Categories.insert({ name: 'Opération', color: '#E5F7E5' });
  Categories.insert({ name: 'Incident', emails: '#F7E6C8' });
  Categories.insert({ name: 'Check du matin', emails: '#EAF6F9' });
  Categories.insert({ name: 'Check du soir', emails: '#E5F0F7' });
  Categories.insert({ name: 'Astreinte', emails: '#F5E6F5' });
  
  // Fixtures Fields
  Fields.insert({ name: 'Grand Public' });
  Fields.insert({ name: 'Entreprise' });
  Fields.insert({ name: 'Réquisition Légale' });
  Fields.insert({ name: 'Facturation' });
    
  // Fixtures Platforms
  Platforms.insert({ 
    tag: 'WISP2', name: 'Wireless Internet Service Provider', location: 'Bagnolet', fields: 'Grand Public', groups: [ 'WISP', 'RJ', 'GAA' ]
  });
  Platforms.insert({ 
    tag: 'WISP3', name: 'Wireless Internet Service Provider', location: 'Masséna', fields: 'Grand Public', groups: [ 'WISP', 'RJ', 'GAA' ]
  });
  Platforms.insert({ 
    tag: 'APE', name: 'Access Platform Entreprise Legacy', location: 'Aubervilliers', fields: 'Entreprise', groups: [ 'APE', 'RJ', 'GAA' ]
  });
  Platforms.insert({ 
    tag: 'APE2', name: 'Access Platform Entreprise', location: 'Archives', fields: [ 'Entreprise' ], groups: [ 'APE', 'RJ', 'GAA' ]
  });
  Platforms.insert({ 
    tag: 'APE4', name: 'Access Platform Entreprise', location: 'Aubervilliers', fields: [ 'Entreprise' ], groups: [ 'APE', 'RJ', 'GAA' ] 
  });
  Platforms.insert({
    tag: 'EPCFBOME', name: 'Pop SGI', location: 'Bordeaux Mériadec', fields: [ 'Grand Public', 'Entreprise', 'Réquisition Légale', 'Facturation' ], groups: [ 'WISP', 'RJ', 'APE', 'CSG', 'GAA' ]
  });
  Platforms.insert({
    tag: 'EPCFMASM', name: 'Pop SGI', location: 'Marseille Saint-Mauront', fields: [ 'Grand Public', 'Entreprise', 'Réquisition Légale', 'Facturation' ], groups: [ 'WISP', 'RJ', 'APE', 'CSG', 'GAA' ]
  });
  Platforms.insert({
    tag: 'EPCFSTWO', name: 'Pop SGI', location: 'Strasbours Woodly', fields: [ 'Grand Public', 'Entreprise', 'Réquisition Légale', 'Facturation' ], groups: [ 'WISP', 'RJ', 'APE', 'CSG', 'GAA' ]
  });
  Platforms.insert({
    tag: 'EPCFPMAS', name: 'Pop SGI', location: 'Paris Masséna', fields: [ 'Grand Public', 'Entreprise', 'Réquisition Légale', 'Facturation' ], groups: [ 'WISP', 'RJ', 'APE', 'CSG', 'GAA' ]
  });
  Platforms.insert({
    tag: 'EPCFAUBE', name: 'Pop SGI', location: 'Aubervilliers', fields: [ 'Grand Public', 'Entreprise', 'Réquisition Légale', 'Facturation' ], groups: [ 'WISP', 'RJ', 'APE', 'CSG', 'GAA' ]
  });
  Platforms.insert({
    tag: 'EPCFLACA', name: 'Pop SGI', location: 'Lacassagne', fields: [ 'Grand Public', 'Entreprise', 'Réquisition Légale', 'Facturation' ], groups: [ 'WISP', 'RJ', 'APE', 'CSG', 'GAA' ]
  });
  Platforms.insert({
    tag: 'EPCFBLAN', name: 'Pop SGI', location: 'Blanc-Mesnil', fields: [ 'Grand Public', 'Entreprise', 'Réquisition Légale', 'Facturation' ], groups: [ 'WISP', 'RJ', 'APE', 'CSG', 'GAA' ]
  });
  Platforms.insert({
    tag: 'ATS', name: 'Robots', location: 'Porte de la Vilette', fields: [ 'Grand Public', 'Entreprise', 'Réquisition Légale', 'Facturation' ], groups: [ 'WISP', 'RJ', 'APE', 'CSG', 'GAA' ]
  });
    
  // Fixtures Users
  var moussaId = Meteor.users.insert({
    emails: [ 'mmariko.ext@orange.com' ],
    profile: { 
      name: 'Moussa Mariko',
      groups: 'GAA'
    }
  });
  var moussa = Meteor.users.findOne(moussaId);

  var hocineId = Meteor.users.insert({
    emails: [ 'hmansouri.ext@orange.com' ],
    profile: { 
      name: 'Hocine Mansouri',
      groups: 'GAA'
    }
  });
  var hocine = Meteor.users.findOne(hocineId);
  
  var damienId = Meteor.users.insert({
    emails: [ 'dgrauet.ext@orange.com' ],
    profile: { 
      name: 'Damien Grauet',
      groups: [ 'WISP', 'RJ' ] 
    }
  });
  var damien = Meteor.users.findOne(damienId);
  
  // Fixtures Equipments
  Equipments.insert({ tag: 'RAD', name: 'Radius', platforms: [ 'WISP2', 'WISP3', 'APE', 'APE2', 'APE4' ] });
  Equipments.insert({ tag: 'SGN', name: 'Session Engine', platforms: [ 'WISP2', 'WISP3' ] });
  Equipments.insert({ tag: 'PMR', name: 'Platform Manager', platforms: [ 'WISP2', 'WISP3' ] });
  Equipments.insert({ tag: 'CL', name: 'Collecteur local', platforms: [ 'EPCFBOME','EPCFMASM','EPCFSTWO','EPCFPMAS','EPCFAUBE','EPCFLACA','EPCFBLAN' ] });
  Equipments.insert({ tag: 'CC', name: 'Collecteur central', platforms: [ 'ISOAUBE', 'ISOARCH' ] });
  Equipments.insert({ tag: 'SCM', name: 'Session Cache Manager', platforms: [ 'APE', 'APE2', 'APE4' ] });
  Equipments.insert({ tag: 'PGW', name: 'Platform Gateway', platforms: [ 'EPCFBOME','EPCFMASM','EPCFSTWO','EPCFPMAS','EPCFAUBE','EPCFLACA','EPCFBLAN' ] });    
    
  // Création d'un ticket avec 2 commentaires    
  var checkMatinId = Tickets.insert({
    title: 'Check du matin',
    userId: moussa._id,
    author: moussa.profile.name,
    number: '14-023-002',
    submitted: now - 7 * 3600 * 1000,
    updated: now - 7 * 3600 * 1000,
    category: 'Check du matin',
    participants: [ 'Moussa Mariko', 'Hocine Mansouri' ],
    commentsCount: 3,
    particpantsCount: 2
  });    

  Comments.insert({
    ticketId: checkMatinId,
    userId: moussa._id,
    author: moussa.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'WISP2'
  });

  Comments.insert({
    ticketId: checkMatinId,
    userId: moussa._id,
    author: moussa.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'WISP3'
  });
  
  Comments.insert({
    ticketId: checkMatinId,
    userId: hocine._id,
    author: hocine.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'WISP2'
  });
    
  // Fixtures Tickets
  var astreinteId = Tickets.insert({
    title: 'Alarme RJ',
    detail: 'Espace insuffisant sur epcfaubeud04', 
    userId: hocine._id,
    author: hocine.profile.name,
    number: '14-022-006',
    references: [ '1401844060' ],
    submitted: now - 10 * 3600 * 1000,
    updated: now - 10 * 3600 * 1000,
    commentsCount: 0,
    category: 'Astreinte',
    participants: 'Hocine Mansouri',
    fields: 'Réquisition Légale',
    platforms: 'AUBE',
    equipments: 'CL',
    attachmentsId: [ '1', '2' ],
    commentsCount: 3,
    participantsCount: 1,
    attachmentsCount: 2
  });

  Comments.insert({
    ticketId: astreinteId,
    userId: hocine._id,
    author: hocine.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'On a un espace suffisant. On voit en HO avec expert RJDM la cause de ce dysfonctionnement',
    attachmentsId: '1'
  });
  
  Comments.insert({
    ticketId: astreinteId,
    userId: hocine._id,
    author: hocine.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Il reste des fichiers depuis 11H.',
    attachmentsId: '2'
  });

  Comments.insert({
    ticketId: astreinteId,
    userId: hocine._id,
    author: hocine.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Le CFT est bien ok'
  });
  
  for (var i = 0; i < 5; i++) {
    Tickets.insert({
      title: 'Test ticket #' + i,
      author: damien.profile.name,
      userId: damien._id,
      submitted: now - i * 3600 * 1000,
      commentsCount: 0
    });
  }
}

