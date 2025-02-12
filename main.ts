blocks.onBlockBroken(GRASS, function () {
    index = 0
    player.say("¡Empieza a excavar!")
    player.say("Espera 10 segundos para ver murciélagos.")
    loops.pause(10000)
    player.say("¡Cuidado con los murciélagos!")
    for (let index = 0; index <= 10; index++) {
        mobs.spawn(BAT, player.position())
    }
})
let index = 0
gameplay.timeSet(gameplay.time(NIGHT))
