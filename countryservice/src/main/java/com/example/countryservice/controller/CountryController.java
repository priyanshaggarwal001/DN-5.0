package com.example.countryservice.controller;

import com.example.countryservice.entity.Country;
import com.example.countryservice.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/country")
public class CountryController {

    @Autowired
    CountryService service;

    @GetMapping("/{code}")
    public Country getCountry(@PathVariable String code){
        return service.getCountry(code);
    }

    @PostMapping
    public Country addCountry(@RequestBody Country country){
        return service.addCountry(country);
    }

    @PutMapping
    public Country updateCountry(@RequestBody Country country){
        return service.updateCountry(country);
    }

    @DeleteMapping("/{code}")
    public void deleteCountry(@PathVariable String code){
        service.deleteCountry(code);
    }

    @GetMapping("/search/{name}")
    public List<Country> searchCountries(@PathVariable String name){
        return service.searchCountries(name);
    }
}