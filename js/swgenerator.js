
function drawRandomPlanet(planet) {
    var planet = ['Aargonar', 'Abafar', 'Abregado-rae', 'Adumar', 'Agamar', 'Ahch-To', 'Ajan Kloss', 'Ajara', 'Alderaan', 'Aleen', 'Almania', 'Ambria', 'Anaxes', 'Ando', 'l\'Anneau de Kafrene', 'Anoat', 'Antar IV', 'Aria Prime', 'Atollon', 'Atzerri', 'Bahryn', 'Bakura', 'Balamak', 'Balmorra', 'Balnab', 'Bandomeer', 'Bardotta', 'Bastion', 'Batuu', 'Berzite', 'Bespin', 'Bilbringi', 'Bogden', 'Bonadan', 'Borleias', 'Bothawui', 'Brentaal IV', 'Brodo Asogi', 'Byss', 'Cantonica', 'Carida', 'Cato Neimoidia', 'Chandel', 'Chandrila', 'Christophsis', 'Commenor', 'Concord Dawn', 'Concord Dawn III', 'Corellia', 'Corulag', 'Coruscant', 'Crait', 'Csilla', 'Dagobah', 'Dantooine', 'Dathomir', 'Denon', 'Devaron', 'Dorin', 'D\'Qar', 'Dromund Kaas', 'Duro', 'Dxun', 'Eadu', 'Endor', 'la lune forestière d\'Endor', 'Eriadu', 'Er\'Kit', 'Espinar', 'Etti IV', 'Exegol', 'Falleen', 'Felucia', 'Fest', 'Florrum', 'Fondor', 'Garel', 'Garqi', 'Géonosis', 'Ghorman', 'Giju', 'Glee Anselm', 'Gyndine', 'Hapes', 'Honogr', 'Hoth', 'Hosnian Prime', 'Humbarine', 'Iakar', 'Ibaar', 'Iego', 'Ilum', 'Iokath', 'Iridonia', 'Ithor', 'Jabiim', 'Jakku', 'Jalindi', 'Jedha', 'Jelucan', 'KAdavo', 'Kalarba', 'Kalee', 'Kalevala', 'Kamino', 'Kashyyyk', 'Kef Bir', 'Kessel','Kiffex', 'Kiffu', 'Kijimi', 'Killun', 'Kinyen', 'Kiros', 'Kirrek', 'Klatooine', 'Kothlis', 'Krownest', 'Kuat', 'Kubindi', 'Ladro', 'Lah\'mu', 'Lasan', 'Lexrul', 'Lira San', 'Lothal', 'Lotho Minor', 'Malachor', 'Malastare', 'Manaan', 'Mandalore', 'Maridun', 'Milvayne', 'Mimban', 'Mirial', 'Mon Calamari', 'Montross', 'Moraband', 'Mortis', 'Mustafar', 'Muunilinst', 'Mygeeto', 'Mykapo', 'Myrkr', 'Naboo', 'NaJedha', 'Nal Hutta', 'Nam Chorios', 'Nar Shadaa', 'Naraka', 'Nixus', 'Obroa-skai', 'Odessen', 'Onderon', 'Oosalon', 'Ord Mantell', 'Orto Plutonia', 'Ossus', 'Palanhi', 'Pantora', 'Parnassos', 'Pasaana', 'Pipada', 'la planète de la Force', 'Polis Massa', 'Quarzite', 'Quell', 'Rakata Prime', 'Ralltiir', 'Rattatak', 'Raxus Prime', 'Raydonia', 'Rendili', 'Rishi', 'la lune de Rishi', 'Rodia', 'Rudrig', 'Rugosa', 'Ruusan', 'Ryloth', 'Saleucami', 'Sarrish', 'Savareen', 'Scarif', 'Scipio', 'Sebaddon', 'Seelos', 'Selonia', 'Serenno', 'Sernpidal', 'Shantipole', 'Shili', 'le glacier de Sinta', 'Sriluur', 'la station de combat Starkiller', 'Stewjon', 'Stygeon Prime', 'Subterrel', 'Sullust', 'Sulon', 'Taanab', 'Takobo', 'Takodana', 'Talus', 'Talvarin', 'Tangenine', 'Taris', 'Tatooine', 'Telos', 'Telos IV', 'Telti', 'Tepasi', 'Terrelia', 'Teth','Thyferra', 'Tibrin', 'Tinnel IV', 'Tirahnn', 'Toydaria', 'Tralus', 'Trandosha', 'Tython', 'Umbara', 'Utapau', 'Uyter', 'Vallt', 'Vassek', 'Vanqor', 'Varl', 'Velusia', 'Vjun', 'Vortex', 'Voss', 'Wayland', 'Wobani', 'Wynkahthu', 'Yaga Minor', 'Yag\'Dhul', 'Yavin', 'Yavin IV', 'Yinchorr', 'Ylesia', 'Zygerria', 'Zeffo', 'Zakel', 'Ziost', 'Zonama Sekot'];
    var randomPlanet = planet[Math.floor(Math.random() * planet.length)];
    return randomPlanet;
}

function drawRandomMajorCharacter(majorCharacter) {
    var majorCharacter = ['Luke Skywalker', 'Leia Organa', 'Han Solo', 'Anakin Skywalker', 'Darth Vader', 'Padme Amidala', 'Ben Solo', 'Kylo Ren', 'Poe Dameron', 'l\'Amiral Ackbar', 'Jyn Erso', 'Lando Calrissian', 'Chewbacca', 'Boba Fett', 'Jango Fett', 'le Mandalorien', 'Armitage Hux', 'Mara Jade', 'Qui-Gon Jinn', 'Obi-Wan Kenobi', ];
    var randomMajorCharacter = majorCharacter[Math.floor(Math.random() * majorCharacter.length)];;
    return randomMajorCharacter;
}

function drawRandomSecondaryCharacter(secondaryCharacter) {
    var secondaryCharacter = ['Stass Allie', 'Mas Amedda', 'Wedge Antilles', 'Nom Anor', 'Ask Aak', 'Raymus Antilles', 'la reine Apailana', 'Passel Argente', 'Ello Asty', 'Jar-jar Binks', 'Ponda Baba', 'Hermione Bagwa', 'Bala-Tik', 'Darth Bane', 'Kirster Banai','Barada', 'Sio Bibble', 'Depa Billaba', 'Walex Blissex', 'Bobbajo', 'Bossk', 'Taslin Brance', 'Ezra Bridger', 'Joruus C\'Baoth', 'Chirpa', 'Airen Cracken', 'Salacious Crumb', 'Yarna D\'Al\'Gargan', 'Figrin d\'An', 'Vober Dand', 'Biggs Darklighter', 'Lexi Dio', 'Lott Dod', 'Jan Dodonna', 'Daultay Dofine', 'Dooku', 'Cin Drallig', 'Kyp Durron', 'Hugo Eckener', 'Caluan Ematt', 'Cornelius Evazan', 'Sun Fac', 'Soontir Fel', 'Kit Fisto', 'Fode et Beed', 'Bib Fortuna', 'Silver Fyre', 'Adi Gallia','Garindan', 'Gragra', 'Greeata', 'Greedo', 'Griveous', 'Grummgar', 'Nute Gunray', 'Guri', 'Rune Haako', 'San Hill', 'Corran Horn', 'Kanan Jarrus', 'l\'Inquisiteur', 'Ysanne Isard', 'Isolder', 'Sidon Ithano', 'J\'Quille', 'Jabba le Hutt', 'la reine Jamillia', 'Tiaan Jerjerrod', 'Dexter Jettster', 'Jira', 'Zett Jukassa', 'Harter Kalonia', 'Maz Kanata', 'Kir Kanos', 'Volfe Karkko', 'Talon Karrde', 'Kyle Katarn', 'Ki-Adi-Mundi', 'Agen Kolar', 'Plo Koon', 'Eeth Koth', 'Labria', 'Tsavong Lah', 'Owen Lars', 'Beru Lars', 'Cliegg Lars', 'Tasu Leech', 'Bevel Lemelisk', 'Lobot', 'Logray', 'Paploo', 'Teebo', 'Crix Madine', 'Shu Mai', 'Malakili', 'Darth Maul', 'Droopy McCool', 'Lyn Me', 'Tion Medon', 'Tionne', 'Dopheld Mitaka', 'Ephant Mon', 'Mon Mothma', 'Sly Moore', 'Danold Tramp'];  
    var randomSecondaryCharacter = secondaryCharacter[Math.floor(Math.random() * secondaryCharacter.length)];;
    return randomSecondaryCharacter;
}


function drawRandomDroid(droid) {
    var droid = ['C-3PO', 'R2-D2', 'BB-8', 'EV-9D9', '8D8', 'IG-88', 'ME-8D9'];
    var randomDroid = droid[Math.floor(Math.random() * droid.length)];
    return randomDroid;
}
function drawRandomObject(object) {
    var object = ['un sabre-laser', 'une vieille barre chocolatée infusée de Force', 'une chaussette orpheline', 'l\'intelligence perdue des Jedi, tombée derrière une machine à café', 'les légendaires grimoires jedi', 'un x-wing des plus suspects', 'un y-wing en très mauvais état', 'les restes d\'une saucisse cocktail', 'le yacht de Palpatine, dans lequel git un coffre plein d\'Holocrons Siths', 'une relique de la Force', 'une motte de beurre salé', 'une mystérieuse vieille qui commercialise les souvenirs', 'un acte de mariage antidaté', 'un hologramme dédicacé', 'un diplôme universitaire acquis de justesse', 'une profession de foi', 'une taxe d\'habitation pour une résidence de luxe', 'un avis de crédit d\'impôt suite à un don au Secours Catholique'];
    var randomObject = object[Math.floor(Math.random() * object.length)];
    return randomObject;
}

function drawRandomScienceShit(scienceShit) {
    var scienceShit = ['les coordonnées de la prochaine station-service', 'des données secrètes ultra importantes']
    var randomScienceShit = scienceShit[Math.floor(Math.random() * scienceShit.length)];
    return randomScienceShit;
}

function drawRandomAction(action) {
    var action = ['d\'une course-poursuite acharnée', 'd\'un duel à mort', 'd\'une soirée mousse vraiment cool', 'd\'un thé dansant endiablé', 'd\'un bal-musette sur la planète Party Hard', 'd\'une grosse cuite au temple jedi', 'd\'un repas à la bonne franquette', 'd\'une journée comme les autres'];
    var randomAction = action[Math.floor(Math.random() * action.length)];
    return randomAction;
}

function drawRandomSituation(situation) {
    var situation = ['être l\'enfant caché de', 'être le descendant de', 'l\'existence d\'une prophétie impliquant', 'le nombre impressionnant de midi-chloriens dans l\'organisme de', 'un énième clone de l\'Empereur fabriqué par', 'que pour rétablir l\'Equilibre dans la Force il faut donner la moitié de ses revenus à Raël par l\'intermédiaire de'];
    var randomSituation = situation[Math.floor(Math.random() * situation.length)];
    return randomSituation;
}

function drawRandomHuttName(huttName) {
    var huttName = ['Zumba', 'Rumba', 'Java', 'Baba Yaga', 'Barbapapa', ];
    var randomHuttName = huttName[Math.floor(Math.random() * huttName.length)];
    return randomHuttName;
}

function drawRandomGalaxyState() {
    var galaxyState = ['est en liesse', 'est en deuil', 'est aux abois', 'est en grand péril', 's\'abonne à Canal Satellite', 'est encore affectée par une enième dissolution du Sénat', 'ne sait plus quoi faire, comme bien souvent', 'cède à la panique et court partout en agitant les bras', 'n\'a pas encore le cran de se débarrasser de ces crétins de Jedi qui foutent toujours le zbeul'];
    var randomGalaxyState = galaxyState[Math.floor(Math.random() * galaxyState.length)];
    return randomGalaxyState;
}

function drawRandomQuestObject(questObject) {
    var questObject = ['de l\'Holocron Sith', 'des plans de la treizième Etoile de la Mort', 'du Premier Mc Guffin', 'de l\'horloge laser plate des Sith', 'd\'un vieux extrêmement mystérieux'];
    var randomQuestObject = questObject[Math.floor(Math.random() * questObject.length)];
    return randomQuestObject;
}

function drawRandomQuestGoal(questGoal) {
    var questGoal = ['gagner instantanément la guerre', 'trouver le Mc Guffin suivant', 'localiser le QG des Rebelles', 'localiser les plans d\'une nouvelle arme secrète encore plus puissante'];
    var randomQuestGoal = questGoal[Math.floor(Math.random() * questGoal.length)];
    return randomQuestGoal;
}

function drawRandomOrder(order) {
    var order = ['le Premier Ordre', 'le Dernier Ordre', 'l\'Avant-Dernier Ordre', 'l\'Empire', 'la Rébellion', 'l\'Alliance Rebelle', 'la Résistance', 'les Sith', 'les Jedi'];
    var randomOrder = order[Math.floor(Math.random() * order.length)];
    return randomOrder;
}

function drawRandomFollower(follower) {
    var follower = ['Des chasseurs de prime', 'Des remords tenaces et', 'Des dettes colossales et'];
    var randomFollower = follower[Math.floor(Math.random() * follower.length)];
    return randomFollower;
}

function drawRandomFamilyLink(familyLink) {
    var familyLink = ['cousin germain du grand-oncle de', 'ami d\'enfance de la nourrice de', 'demi-frère de lait du meilleur ami de', 'l\'ami dans la Force de', 'la deuxième partie d\'une dyade dans la Force avec'];
    var randomFamilyLink = familyLink[Math.floor(Math.random() * familyLink.length)];
    return randomFamilyLink;
}

function drawRandomSithLord(sithLordName) {
    var sithLordName = ['Darth Trump', 'Darth Trouducus'];
    var randomSithLord = sithLordName[Math.floor(Math.random() * sithLordName.length)];
    return randomSithLord;
}

// PHRASES

    var phrase1 = drawRandomMajorCharacter() + ' se rend sur ' + drawRandomPlanet() + ' et y trouve ' + drawRandomObject() + ' ayant appartenu à ' + drawRandomSecondaryCharacter() + '.';

    var phrase2 = 'Au terme ' + drawRandomAction() + ', ' + drawRandomMajorCharacter() + ' découvre ' + drawRandomSituation() + ' ' + drawRandomSecondaryCharacter() + '.';

    var phrase3 = 'La Galaxie ' + drawRandomGalaxyState() + '.';

    var phrase4 = drawRandomMajorCharacter() + ' part en quête ' + drawRandomQuestObject() + ' permettant de ' + drawRandomQuestGoal() + '.';

    var phrase5 = 'La Force demande à ' + drawRandomMajorCharacter() + ' de détruire ' + drawRandomObject() + ' au bénéfice de ' + drawRandomHuttName() + ' le Hutt.';

    var phrase6 = 'La cantina de ' + drawRandomPlanet() + ' est assiégée par ' + drawRandomOrder() + ', sous les ordres de ' + drawRandomSecondaryCharacter() + '.';

    var phrase7 = 'Horreur ! ' + drawRandomMajorCharacter() + ', dont la resurrection fut orchestrée en secret par ' + drawRandomSecondaryCharacter() + ', menace ' + drawRandomMajorCharacter() + ' sur la planète ' + drawRandomPlanet() + '.';

    var phrase8 = drawRandomFollower() + ' impitoyables poursuivent ' + drawRandomMajorCharacter() + ', qui doit retrouver ' + drawRandomObject() + ' pour accomplir une prophétie de la Force.'

    var phrase9 = 'Le droïde ' + drawRandomDroid() + ' doit recompiler ' + drawRandomScienceShit() + ' dans le vaisseau afin que les Jedi puissent ' + drawRandomQuestGoal() + '. Pendant ce temps, les Sith exultent sur ' + drawRandomPlanet() + '.'

    var phrase10 = 'Désastre ! ' + drawRandomOrder() + ' est en grève. Seul ' + drawRandomMajorCharacter() + ' peut négocier avec ' + drawRandomSecondaryCharacter() + ', à la tête du syndicat, afin de mettre fin à cela. Pendant ce temps, cependant, ' + drawRandomOrder() + ', sur l\'instigation de ' + drawRandomSithLord() + ', déploie la Phase 354 de son plan diabolique...'


    var phraseConclusive = ['La paix reviendra-t-elle dans la galaxie ?', 'Kylo Ren mourra-t-il incel ?', 'Qu\'est-ce qui pourrait sauver l\'amour ? Et comment retrouver le goût de la vie ? Qui pourra remplacer le besoin par l\'envie ?'];

    var randomPhraseConclusive = phraseConclusive[Math.floor(Math.random() * phraseConclusive.length)]; 


console.log(phrase1);
console.log(phrase2);
console.log(phrase3);
console.log(phrase4);
console.log(phrase5);
console.log(phrase6);
console.log(phrase7);
console.log(phrase8);
console.log(phrase9);
console.log(phrase10);
console.log(phrase11);
console.log(phrase12);


console.log(randomPhraseConclusive);




/*


""

Mais _ découvre que _ s'est allié à _ dans sa quête désespérée de _, et d'ores et déjà, leurs troupes menacent de marcher sur _.
_, _ s'engage dans la bataille et envoie des _ pour espionner _.
Depuis _, l'Empereur Palpatine s'efforce de _ afin d'amener _ à _. La Force _.
Suite à l'apparition du fantôme de Force de _ dans une cantina de _, les amis de _ partent en quête de _. Mais _ rôde.
Victore ! Après l'écrasante défaite du Premier Ordre à _, la Résistance _.



*/