using Microsoft.OpenApi.Models;
var builder = WebApplication.CreateBuilder(args);
var services = builder.Services;
services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { 
        Title = "My API",
        Version = "v1",
        Description ="Description for the API goes here.",
    });
});

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddScoped<NutriTrack.DbContext.AppDbContext>();

var app = builder.Build();
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "API V1");

    // To serve SwaggerUI at application's root page, set the RoutePrefix property to an empty string.
    c.RoutePrefix = "swagger";
});
// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "api/{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();