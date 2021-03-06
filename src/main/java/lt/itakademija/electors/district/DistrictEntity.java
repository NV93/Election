package lt.itakademija.electors.district;

import lt.itakademija.electors.county.CountyEntity;
import lt.itakademija.electors.representative.DistrictRepresentativeEntity;
import lt.itakademija.electors.results.multi.ResultMultiEntity;
import lt.itakademija.electors.results.single.ResultSingleEntity;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

/**
 * Created by Pavel on 2017-01-12.
 */
@Entity
public class DistrictEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "DISTRICT_ID")
    private Long id;

    @NotNull
    private String name;

    @NotNull
    private String adress;

    @NotNull
    private Long numberOfElectors;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(nullable = true, name= "COUNTY_ID")
    private CountyEntity county;

    @OneToOne(cascade = CascadeType.REMOVE, mappedBy = "district")
    private DistrictRepresentativeEntity representative;

    @OneToMany(cascade = CascadeType.REMOVE, mappedBy = "district", fetch = FetchType.EAGER)
    private List<ResultSingleEntity> resultSingleEntity;

    @OneToMany(cascade = CascadeType.REMOVE, mappedBy = "district")
    private List<ResultMultiEntity> resultMultiEntity;

    private Integer spoiledMulti;

    private Integer spoiledSingle;

    public Integer getSpoiledMulti() {
        return spoiledMulti;
    }

    public void setSpoiledMulti(Integer spoiledMulti) {
        this.spoiledMulti = spoiledMulti;
    }

    public Integer getSpoiledSingle() {
        return spoiledSingle;
    }

    public void setSpoiledSingle(Integer spoiledSingle) {
        this.spoiledSingle = spoiledSingle;
    }

    public List<ResultSingleEntity> getResultSingleEntity() {
        return resultSingleEntity;
    }

    public void setResultSingleEntity(List<ResultSingleEntity> resultSingleEntity) {
        this.resultSingleEntity = resultSingleEntity;
    }

    public List<ResultMultiEntity> getResultMultiEntity() {
        return resultMultiEntity;
    }

    public void setResultMultiEntity(List<ResultMultiEntity> resultMultiEntity) {
        this.resultMultiEntity = resultMultiEntity;
    }

    public Long getNumberOfElectors() {
        return numberOfElectors;
    }

    public void setNumberOfElectors(Long numberOfElectors) {
        this.numberOfElectors = numberOfElectors;
    }

    public DistrictRepresentativeEntity getRepresentative() {
        return representative;
    }

    public void setRepresentative(DistrictRepresentativeEntity representative) {
        this.representative = representative;
    }

    public CountyEntity getCounty() {
        return county;
    }

    public void setCounty(CountyEntity county) {
        this.county = county;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

}
