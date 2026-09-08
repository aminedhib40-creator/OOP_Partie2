class Personnage {
  constructor(nom, pointsDeVie, force) {
    this.nom=nom
    this.pointsDeVie=pointsDeVie
    this.force=force
  }
  attaquer(cible){
    console.log(this.nom +" attaque"+" "+cible.nom) 
    cible.recevoirDegats(this.force)

  };
  recevoirDegats(nbrdegats){
    let damage=0
    if (this.pointsDeVie>0){
    damage += this.pointsDeVie-nbrdegats
    console.log("Points de vie restants : "+damage)
    }
    
    }
    estVivant(){
        if (this.pointsDeVie>0){
            return true
        }
        return false
    }
}
class Guerrier extends Personnage {
  constructor(nom, pointsDeVie, force, arme) {
   super(nom, pointsDeVie, force) 
   this.arme=arme
  }
  utiliserArme(cible){
    console.log(this.nom +" "+ "attaque avec"+" "+this.arme+" "+"!")
    cible.recevoirDegats(this.force)

  }
  attaquer (cible){
    this.utiliserArme(cible)
  }

}
class Mage extends Personnage {
  constructor(nom, pointsDeVie, force, mana) {
    super(nom, pointsDeVie, force)
    this.mana=mana
  }
  lancerSort(cible){
    if(this.mana<20){
        return "Pas assez de mana !"
    }
    this.mana-=20
    cible.recevoirDegats(30)
}
regenererMana(){
    this.mana+=10
    if(this.mana>100){
        this.mana=100
    }
}
attaquer (cible){
    this.lancerSort(cible)
}
}
class Paladin extends Guerrier {
  constructor(nom, pointsDeVie, force, arme, pouvoirSoin) {
    super(nom, pointsDeVie, force, arme)
    this.pouvoirSoin=pouvoirSoin
  }
  soigner(cible){
    cible.pointsDeVie+=this.pouvoirSoin
    if(this.pointsDeVie>100){
        this.pointsDeVie=100
    }
  }
}
class Archer extends Personnage {
  constructor(nom, pointsDeVie, force, nombreDeFleches) {
    super(nom, pointsDeVie, force)
    this.nombreDeFleches=nombreDeFleches
  }
  tirer(cible){
    if (this.nombreDeFleches===0){
        return "N'a plus de flèches !"
    }
    this.nombreDeFleches--
    cible.recevoirDegats(this.force)
  }
  attaquer (cible){
    this.tirer(cible)
  }
}
let personne=new Personnage("amine",100,20)
let Guerriers=new Guerrier("ahmed",100,10,"M4")
console.log(Guerriers.attaquer(personne))
