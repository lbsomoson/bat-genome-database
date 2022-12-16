# Generated by Django 3.2 on 2021-08-26 11:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Taxonomy', '0009_species_child'),
    ]

    operations = [
        migrations.AlterField(
            model_name='domain',
            name='IJSEM_list',
            field=models.CharField(max_length=1024, null=True),
        ),
        migrations.AlterField(
            model_name='domain',
            name='nomenclature_status',
            field=models.CharField(max_length=1024, null=True),
        ),
        migrations.AlterField(
            model_name='domain',
            name='notes',
            field=models.CharField(max_length=1024, null=True),
        ),
        migrations.AlterField(
            model_name='domain',
            name='publication_status',
            field=models.CharField(max_length=1024, null=True),
        ),
        migrations.AlterField(
            model_name='domain',
            name='taxonomic_status',
            field=models.CharField(max_length=1024, null=True),
        ),
    ]