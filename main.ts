namespace SpriteKind {
    export const Weapon = SpriteKind.create()
    export const Enemy1 = SpriteKind.create()
    export const Enemy2 = SpriteKind.create()
    export const Enemy3 = SpriteKind.create()
}
let projectile: Sprite = null
let Blob_2: Sprite = null
let Enemy_3: Sprite = null
let Enemy_1: Sprite = null
let Enemy_2: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy1, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy3, function (sprite, otherSprite) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . a . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Blob_2, 12, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy3, function (sprite, otherSprite) {
    Enemy_3.destroy()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Weapon, function (sprite, otherSprite) {
    let Peashooter_Gun: Sprite = null
    let Blob: Sprite = null
    Blob.destroy()
    Peashooter_Gun.destroy()
    Blob_2 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ............777..77.....
        ...........77f7777f.....
        .....aaaaaa7777777f.....
        ....aaafaafa.7..........
        ...aaaafaafaa7..........
        ..aaaaaaaaaaaa..........
        .aaaaaaaaaaaaa..........
        `, SpriteKind.Player)
    controller.moveSprite(Blob_2)
    Blob_2.setStayInScreen(true)
    Enemy_1.follow(Blob_2)
    Enemy_2.follow(Blob_2)
    Enemy_3.follow(Blob_2)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy2, function (sprite, otherSprite) {
    Enemy_2.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy1, function (sprite, otherSprite) {
    Enemy_1.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy2, function (sprite, otherSprite) {
    game.over(false)
})
