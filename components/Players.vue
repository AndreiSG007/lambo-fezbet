<template>
    <div class="players">
        <h2 class="players__title players__title--desktop">{{ $t('remainingPlayers') }}</h2>
        <div class="players__wrapper">
            <h2 class="players__title players__title--mobile">{{ $t('remainingPlayers') }}</h2>
            <h5 class="players__subtitle">{{ $t('playerNames') }}</h5>
            <div class="players__grid">
                <div class="players__grid-item" v-for="(playerName, index) in players" :key="index">
                    {{ playerName }}
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
    const players = [
        "060*****",
        "OEC*****",
        "BOC*****",
        "ORT*****",
        "PRO*****",
        "DAN*****",
        "LUK*****",
        "TES*****",
        "MAL*****",
    ];
</script>