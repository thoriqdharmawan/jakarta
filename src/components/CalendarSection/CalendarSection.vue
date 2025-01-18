<template>
  <section class="container mt-5 mb-5">
    <div class="row gap-4">
      <div class="col">
        <div class="p-3 mb-5 rounded">
          <VDatePicker view="weekly" borderless transparent title-position="left" is-dark="system" color="gray" />
          <div>
            <h3 class="mb-3">Events</h3>

            <div class="d-flex row gap-3">
              <div class="d-flex gap-3">
                <img src="https://placehold.co/50" class="img-fluid rounded" alt="">
                <div>
                  <h4 class="fs-5 mb-0 fw-medium">Mom and dad's anniversary</h4>
                  <span class="text-secondary">Sunday, 3:00 am</span>
                </div>
              </div>
              <div class="d-flex gap-3">
                <img src="https://placehold.co/50" class="img-fluid rounded" alt="">
                <div>
                  <h4 class="fs-5 mb-0 fw-medium">Mom and dad's anniversary</h4>
                  <span class="text-secondary">Sunday, 3:00 am</span>
                </div>
              </div>
              <div class="d-flex gap-3">
                <img src="https://placehold.co/50" class="img-fluid rounded" alt="">
                <div>
                  <h4 class="fs-5 mb-0 fw-medium">Mom and dad's anniversary</h4>
                  <span class="text-secondary">Sunday, 3:00 am</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo itaque facere laborum labore provident
          cumque sequi deserunt molestias, odit qui dolorum perferendis, eaque doloribus? Voluptatum illum illo
          temporibus sunt quidem!</p>
      </div>
    </div>
  </section>
</template>

<style>
.vc-container.vc-weekly {
  width: 100%;
}

.vc-container .vc-title,
.vc-container .vc-arrow {
  background-color: #fff;
}

.calendar-container {
  max-width: 600px;
}
</style>
